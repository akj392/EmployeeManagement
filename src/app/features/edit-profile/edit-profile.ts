import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss'
})
export class EditProfileComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly profileForm = this.fb.group({
    fullName: ['Ava Martinez', Validators.required],
    email: ['ava.martinez@company.com', [Validators.required, Validators.email]],
    phone: ['+1 (555) 014-2088', Validators.required],
    location: ['Seattle, WA', Validators.required],
    department: ['People Operations', Validators.required],
    bio: ['Leads employee experience initiatives and oversees strategic people operations across the organization.', Validators.required],
    avatarUrl: ['https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80']
  });

  previewUrl = this.profileForm.get('avatarUrl')?.value ?? '';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      this.previewUrl = result;
      this.profileForm.patchValue({ avatarUrl: result });
    };
    reader.readAsDataURL(file);
  }

  save(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    console.log('Updated profile', this.profileForm.value);
    this.router.navigate(['/profile']);
  }

  cancel(): void {
    this.router.navigate(['/profile']);
  }
}
