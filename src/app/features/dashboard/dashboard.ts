import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {

  cards = [
    {
      title: 'Employees',
      value: 142,
      icon: 'groups'
    },
    {
      title: 'Departments',
      value: 8,
      icon: 'apartment'
    },
    {
      title: 'Pending Uploads',
      value: 16,
      icon: 'cloud_upload'
    },
    {
      title: 'Reports',
      value: 32,
      icon: 'bar_chart'
    }
  ];

}