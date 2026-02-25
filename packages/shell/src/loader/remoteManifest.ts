import type { RemoteEntry } from "./RemoteLoader.types";

export const REMOTE_MANIFEST: Record<string, RemoteEntry> = {
  marine: {
    url: "http://localhost:3001/assets/remoteEntry.js",
    scope: "workbench_marine",
    module: "./WorkbenchApp",
  },
  cyber: {
    url: "http://localhost:3002/assets/remoteEntry.js",
    scope: "workbench_cyber",
    module: "./mount",
  },
};
