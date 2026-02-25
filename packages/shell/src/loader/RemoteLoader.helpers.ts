import { ComponentType, createElement } from "react";
import { createRoot } from "react-dom/client";
import { MountFn, RemoteProps } from "./RemoteLoader.types";
import { REMOTE_MANIFEST } from "./remoteManifest";

const modules: Record<string, any> = {};
const mounts: Record<string, MountFn> = {};

function toMount(exported: any, props: RemoteProps): MountFn {
  if (exported.mount) return exported.mount;
  const Component: ComponentType<RemoteProps> = exported?.default ?? exported;
  return (container) => {
    createRoot(container).render(createElement(Component, props));
    return Promise.resolve();
  };
}

export async function getMount(
  lobSlug: string,
  props: RemoteProps,
): Promise<MountFn> {
  if (mounts[lobSlug]) return mounts[lobSlug];

  const entry = REMOTE_MANIFEST[lobSlug];
  if (!entry) throw new Error(`No remote: ${lobSlug}`);

  if (!modules[lobSlug]) {
    const mod = await import(/* @vite-ignore */ entry.url);
    await mod.init({});
    modules[lobSlug] = mod;
  }

  const exported = await modules[lobSlug]
    .get(entry.module)
    .then((f: any) => f());
  return (mounts[lobSlug] = toMount(exported, props));
}
