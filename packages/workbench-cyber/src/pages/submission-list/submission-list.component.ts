import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-submission-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submission-list.component.html',
})
export class SubmissionListComponent implements OnInit {
  submissions: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private api: ApiService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  async ngOnInit() {
    try {
      this.submissions = await this.api.get<any[]>('/api/cyber/submissions');
    } catch (e: any) {
      this.error = e.message;
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }

  goToDetail(id: string) {
    this.router.navigate(['cyber', 'submissions', id]);
  }
}
