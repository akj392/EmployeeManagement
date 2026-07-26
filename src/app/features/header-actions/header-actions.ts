import { Component, inject } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-actions',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatBadgeModule, MatMenuModule],
  templateUrl: './header-actions.html',
  styleUrl: './header-actions.scss'
})
export class HeaderActionsComponent {
  private readonly router = inject(Router);

  readonly notificationsCount = 3;
  readonly notifications = [
    { title: 'New leave request', detail: 'Alex requested time off for Friday' },
    { title: 'Team update', detail: 'Quarterly review meeting starts at 2 PM' },
    { title: 'Payroll reminder', detail: 'Timesheets due by 5 PM today' }
  ];

  readonly user = {
    name: 'Ava Martinez',
    role: 'HR Director',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  };

  viewProfile(): void {
    this.router.navigate(['/profile']);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
