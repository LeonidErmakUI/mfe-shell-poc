export interface RemoteProps {
  basePath: string;
  lobSlug: string;
}

export interface RemoteEntry {
  url: string;
  scope: string;
  module: string;
}

export type MountFn = (container: HTMLElement) => Promise<void>;
