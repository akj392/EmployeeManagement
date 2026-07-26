import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

interface Employee {
  name: string;
  image: string;
  role: string;
  department: string;
  email: string;
  status: 'Active' | 'On Leave' | 'Pending';
}

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, MatButtonModule, MatChipsModule, MatTableModule, MatPaginatorModule],
  templateUrl: './employees.html',
  styleUrl: './employees.scss'
})
export class EmployeesComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  readonly displayedColumns = ['image', 'name', 'role', 'department', 'email', 'status'];

  readonly employees: Employee[] = [
    {
      name: 'Ava Martinez',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      role: 'Senior Frontend Developer',
      department: 'Engineering',
      email: 'ava.martinez@company.com',
      status: 'Active'
    },
    {
      name: 'Noah Patel',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      role: 'Product Designer',
      department: 'Design',
      email: 'noah.patel@company.com',
      status: 'Active'
    },
    {
      name: 'Mia Chen',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      role: 'HR Operations Lead',
      department: 'Human Resources',
      email: 'mia.chen@company.com',
      status: 'On Leave'
    },
    {
      name: 'Liam Brooks',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      role: 'Operations Analyst',
      department: 'Operations',
      email: 'liam.brooks@company.com',
      status: 'Pending'
    },
    {
      name: 'Sofia Ramirez',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      role: 'Finance Manager',
      department: 'Finance',
      email: 'sofia.ramirez@company.com',
      status: 'Active'
    },
    {
      name: 'Ethan Clark',
      image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80',
      role: 'Sales Executive',
      department: 'Sales',
      email: 'ethan.clark@company.com',
      status: 'Active'
    },
    {
      name: 'Olivia Green',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=200&q=80',
      role: 'Customer Success Lead',
      department: 'Support',
      email: 'olivia.green@company.com',
      status: 'Pending'
    },
    {
      name: 'James Wilson',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      role: 'IT Specialist',
      department: 'Technology',
      email: 'james.wilson@company.com',
      status: 'On Leave'
    },
    {
      name: 'Amelia Scott',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80',
      role: 'Marketing Strategist',
      department: 'Marketing',
      email: 'amelia.scott@company.com',
      status: 'Active'
    },
    {
      name: 'Benjamin Lee',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      role: 'Compliance Officer',
      department: 'Legal',
      email: 'benjamin.lee@company.com',
      status: 'Active'
    },
    {
      name: 'Harper Davis',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
      role: 'Research Analyst',
      department: 'Research',
      email: 'harper.davis@company.com',
      status: 'Active'
    },
    {
      name: 'Lucas Moore',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      role: 'Supply Chain Manager',
      department: 'Operations',
      email: 'lucas.moore@company.com',
      status: 'Pending'
    },
    {
      name: 'Chloe Turner',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      role: 'Project Coordinator',
      department: 'PMO',
      email: 'chloe.turner@company.com',
      status: 'On Leave'
    },
    {
      name: 'Daniel Kim',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      role: 'Data Engineer',
      department: 'Engineering',
      email: 'daniel.kim@company.com',
      status: 'Active'
    }
  ];

  readonly dataSource = new MatTableDataSource<Employee>(this.employees);

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getStatusClass(status: Employee['status']): string {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'On Leave':
        return 'status-leave';
      default:
        return 'status-pending';
    }
  }
}
