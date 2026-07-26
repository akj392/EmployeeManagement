import { Routes } from '@angular/router';
import { ShellComponent } from './layout';


export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features')
            .then(c => c.DashboardComponent)
      },
      {
        path: 'employees',
        loadComponent: () =>
          import('./features')
            .then(c => c.EmployeesComponent)
      },
      {
        path: 'employees/add',
        loadComponent: () =>
          import('./features')
            .then(c => c.AddEmployeeComponent)
      },
      {
        path: 'departments',
        loadComponent: () =>
          import('./features')
            .then(c => c.DepartmentsComponent)
      },
      {
        path: 'departments/add',
        loadComponent: () =>
          import('./features')
            .then(c => c.AddDepartmentComponent)
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./features')
            .then(c => c.ProfileComponent)
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./features')
            .then(c => c.ReportsComponent)
      },
      {
        path: 'edit-profile',
        loadComponent: () =>
          import('./features')
            .then(c => c.EditProfileComponent)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth')
        .then(c => c.LoginComponent)
  }
];