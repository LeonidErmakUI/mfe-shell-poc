import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app';
import { appConfig } from './app.config';
import { Router } from '@angular/router';

bootstrapApplication(App, appConfig)
  .then((appRef) => {
    const router = appRef.injector.get(Router);
    router.navigateByUrl('/cyber/submissions');
  })
  .catch(console.error);
