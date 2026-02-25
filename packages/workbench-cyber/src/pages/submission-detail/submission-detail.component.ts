import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ShellService } from '../../services/shell.service';

@Component({
  selector: 'app-submission-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submission-detail.component.html',
})
export class SubmissionDetailComponent implements OnInit {
  sub: any = null;
  loading = true;
  fields: { label: string; value: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private shell: ShellService,
    private cdr: ChangeDetectorRef,
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    try {
      this.sub = await this.api.get<any>(`/api/cyber/submissions/${id}`);
      this.shell.emit('submission:selected', { submissionId: id, lob: 'cyber' });
      this.fields = [
        { label: 'Industry', value: this.sub.industrySector },
        { label: 'Annual Revenue', value: '$' + this.sub.annualRevenue },
        { label: 'Security Score', value: this.sub.securityPostureScore + '/100' },
        { label: 'Breach History', value: this.sub.breachHistory ? 'Yes' : 'No' },
        { label: 'Coverage Limit', value: '$' + this.sub.coverageLimit },
        { label: 'Status', value: this.sub.status },
      ];
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  back() {
    this.router.navigate(['cyber', 'submissions']);
  }
  openBind() {
    this.router.navigate(['cyber', 'submissions', this.sub.id, 'bind']);
  }
}
