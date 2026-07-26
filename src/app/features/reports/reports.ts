import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface ReportItem {
  title: string;
  description: string;
  category: string;
  trend: string;
  icon: string;
  accent: string;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './reports.html',
  styleUrl: './reports.scss'
})
export class ReportsComponent {
  readonly metrics = [
    { label: 'Active reports', value: '24', hint: '+8% this month' },
    { label: 'Pending review', value: '6', hint: '2 urgent' },
    { label: 'Avg. turnaround', value: '3.2d', hint: 'faster than target' }
  ];

  readonly reports: ReportItem[] = [
    {
      title: 'People Pulse',
      description: 'Engagement and retention snapshot for the last quarter.',
      category: 'HR Analytics',
      trend: '+12% engagement',
      icon: 'insights',
      accent: 'linear-gradient(135deg, #3f51b5, #5c6bc0)'
    },
    {
      title: 'Budget Forecast',
      description: 'Projected costs across departments and hiring plans.',
      category: 'Finance',
      trend: 'Forecast stable',
      icon: 'account_balance_wallet',
      accent: 'linear-gradient(135deg, #009688, #4db6ac)'
    },
    {
      title: 'Attendance Overview',
      description: 'Daily attendance performance and policy exceptions.',
      category: 'Operations',
      trend: '98.4% present',
      icon: 'event_available',
      accent: 'linear-gradient(135deg, #ff9800, #ffb74d)'
    },
    {
      title: 'Talent Review',
      description: 'Promotion readiness and succession tracking.',
      category: 'Leadership',
      trend: '3 ready now',
      icon: 'groups',
      accent: 'linear-gradient(135deg, #e91e63, #f06292)'
    }
  ];
}
