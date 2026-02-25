import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bind-wizard',
  standalone: true,
  templateUrl: './bind-wizard.component.html',
})
export class BindWizardComponent {
  id = this.route.snapshot.paramMap.get('id')!;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  back() {
    this.router.navigate(['cyber', 'submissions', this.id]);
  }
}
