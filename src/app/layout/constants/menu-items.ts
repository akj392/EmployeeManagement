import { MenuItem } from "../models/menu-item.model";


export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard'
  },
  {
    label: 'Employees',
    icon: 'groups',
    route: '/employees'
  },
  {
    label: 'Add Employee',
    icon: 'person_add',
    route: '/employees/add'
  },
  {
    label: 'Departments',
    icon: 'apartment',
    route: '/departments'
  },
  {
    label: 'Reports',
    icon: 'bar_chart',
    route: '/reports'
  },
];