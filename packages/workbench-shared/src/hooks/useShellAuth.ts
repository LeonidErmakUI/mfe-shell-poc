export function useShellAuth() {
  const shell = (window as any).__shell__;
  return {
    getToken: shell?.getAccessToken ?? (() => Promise.resolve("")),
    user: shell?.getUserContext?.() ?? null,
  };
}
