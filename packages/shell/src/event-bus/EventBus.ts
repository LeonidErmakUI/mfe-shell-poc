type Callback = (payload: unknown) => void;

class EventBusImpl {
  private listeners = new Map<string, Set<Callback>>();

  emit(channel: string, payload: unknown) {
    this.listeners.get(channel)?.forEach((cb) => cb(payload));
  }

  on(channel: string, callback: Callback): () => void {
    if (!this.listeners.has(channel)) {
      this.listeners.set(channel, new Set());
    }
    this.listeners.get(channel)!.add(callback);
    return () => this.listeners.get(channel)?.delete(callback);
  }
}

export const eventBus = new EventBusImpl();
