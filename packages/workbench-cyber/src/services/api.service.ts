import { Injectable } from '@angular/core';
import { ShellService } from './shell.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private shell: ShellService) {}

  getBffUrl(): string {
    return this.shell.getBffUrl();
  }

  async get<T>(path: string): Promise<T> {
    const token = await this.shell.getToken();
    const res = await fetch(`${this.shell.getBffUrl()}${path}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }
}
