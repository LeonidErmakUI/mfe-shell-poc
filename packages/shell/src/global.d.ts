declare global {
  interface Window {
    __shell__: {
      getAccessToken: () => Promise<string | undefined>;
      getUserContext: () => UserContext;
      eventBus: {
        emit: (channel: string, payload: unknown) => void;
        on: (
          channel: string,
          callback: (payload: unknown) => void,
        ) => () => void;
      };
      bffUrl: string;
    };
    __webpack_share_scopes__: Record<string, unknown>;
    [scope: string]: RemoteWindow[string];
  }
  declare const __webpack_init_sharing__: (scope: string) => Promise<void>;
  declare const __webpack_share_scopes__: Record<string, unknown>;
}

export {};
