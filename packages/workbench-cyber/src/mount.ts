import { ApplicationRef } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { App } from './app';
import { appConfig } from './app.config';

let appRef: ApplicationRef | null = null;
let appRoot: HTMLElement | null = null;

async function navigate(url: string) {
  const router = appRef!.injector.get(Router);
  await router.navigateByUrl(url);
  appRef!.tick();
}

export async function mount(container: HTMLElement): Promise<void> {
  const url = window.location.pathname || '/cyber/submissions';

  if (appRef && appRoot) {
    container.appendChild(appRoot);
    await navigate(url);
    return;
  }

  appRoot = document.createElement('app-root');
  container.appendChild(appRoot);
  appRef = await bootstrapApplication(App, appConfig);
  await navigate(url);
}
