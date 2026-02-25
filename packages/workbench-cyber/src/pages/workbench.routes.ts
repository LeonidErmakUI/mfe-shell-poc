import { Routes } from '@angular/router';

export const WORKBENCH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'submissions',
    pathMatch: 'full',
  },
  {
    path: 'submissions',
    loadComponent: () =>
      import('./submission-list/submission-list.component').then((m) => m.SubmissionListComponent),
  },
  {
    path: 'submissions/:id',
    loadComponent: () =>
      import('./submission-detail/submission-detail.component').then(
        (m) => m.SubmissionDetailComponent,
      ),
  },
  {
    path: 'submissions/:id/bind',
    loadComponent: () =>
      import('./bind-wizard/bind-wizard.component').then((m) => m.BindWizardComponent),
  },
];
