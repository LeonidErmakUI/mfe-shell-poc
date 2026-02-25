import { useEffect } from "react";

export function useEventBus() {
  const bus = (window as any).__shell__?.eventBus;

  function emit(channel: string, payload: unknown) {
    bus?.emit(channel, payload);
  }

  function useOn(channel: string, callback: (payload: unknown) => void) {
    useEffect(() => {
      const unsub = bus?.on(channel, callback);
      return () => unsub?.();
    }, [channel]);
  }

  return { emit, useOn };
}
