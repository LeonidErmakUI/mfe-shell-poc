import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: 'cyber',
        loadChildren: () => import('./pages/workbench.routes').then((m) => m.WORKBENCH_ROUTES),
      },
      { path: '**', redirectTo: 'cyber/submissions' },
    ]),
  ],
};
