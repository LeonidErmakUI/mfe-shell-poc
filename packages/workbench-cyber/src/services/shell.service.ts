import { Injectable } from '@angular/core';

const DEV_FALLBACK = {
  getAccessToken: () => Promise.resolve('dev-token'),
  bffUrl: 'http://localhost:4000',
  eventBus: { emit: () => {}, on: () => () => {} },
};

@Injectable({ providedIn: 'root' })
export class ShellService {
  private get shell(): any {
    return (window as any).__shell__ ?? DEV_FALLBACK;
  }

  getToken(): Promise<string> {
    return this.shell.getAccessToken?.() ?? Promise.resolve('');
  }

  getBffUrl(): string {
    return this.shell.bffUrl ?? 'http://localhost:4000';
  }

  emit(channel: string, payload: unknown): void {
    this.shell.eventBus?.emit(channel, payload);
  }
}
