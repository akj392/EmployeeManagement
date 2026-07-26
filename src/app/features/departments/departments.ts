import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

interface Department {
  name: string;
  head: string;
  employeeCount: number;
  budget: string;
  icon: string;
}

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './departments.html',
  styleUrl: './departments.scss'
})
export class DepartmentsComponent {
  readonly departments: Department[] = [
    {
      name: 'Engineering',
      head: 'Ava Martinez',
      employeeCount: 24,
      budget: '$180K',
      icon: 'code'
    },
    {
      name: 'Design',
      head: 'Noah Patel',
      employeeCount: 8,
      budget: '$65K',
      icon: 'palette'
    },
    {
      name: 'Human Resources',
      head: 'Mia Chen',
      employeeCount: 6,
      budget: '$48K',
      icon: 'groups'
    },
    {
      name: 'Sales',
      head: 'Ethan Clark',
      employeeCount: 14,
      budget: '$92K',
      icon: 'trending_up'
    },
    {
      name: 'Finance',
      head: 'Sofia Ramirez',
      employeeCount: 7,
      budget: '$74K',
      icon: 'account_balance_wallet'
    },
    {
      name: 'Operations',
      head: 'Liam Brooks',
      employeeCount: 11,
      budget: '$88K',
      icon: 'build_circle'
    }
  ];
}
