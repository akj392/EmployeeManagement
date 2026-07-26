import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, MatListModule, RouterModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class ProfileComponent {
  readonly profile = {
    name: 'Ava Martinez',
    role: 'HR Director',
    email: 'ava.martinez@company.com',
    phone: '+1 (555) 014-2088',
    location: 'Seattle, WA',
    department: 'People Operations',
    bio: 'Leads employee experience initiatives and oversees strategic people operations across the organization.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  };
}
