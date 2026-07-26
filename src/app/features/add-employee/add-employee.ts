import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.scss'
})
export class AddEmployeeComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly departments = ['Engineering', 'Design', 'HR', 'Sales', 'Finance', 'Operations', 'Marketing', 'Support', 'Legal', 'Technology'];
  readonly roles = ['Software Engineer', 'Product Designer', 'HR Manager', 'Sales Executive', 'Finance Manager', 'Operations Lead', 'Marketing Specialist', 'Customer Success Lead', 'Compliance Officer', 'IT Specialist'];

  readonly employeeForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required],
    department: ['', Validators.required],
    status: ['Active', Validators.required],
    image: ['']
  });

  imagePreview: string | null = null;

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      this.employeeForm.patchValue({ image: this.imagePreview });
    };
    reader.readAsDataURL(file);
  }

  submit(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    console.log('New employee:', this.employeeForm.getRawValue());
    this.router.navigate(['/employees']);
  }

  cancel(): void {
    this.router.navigate(['/employees']);
  }
}
