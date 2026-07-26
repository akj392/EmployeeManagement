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
  selector: 'app-add-department',
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
  templateUrl: './add-department.html',
  styleUrl: './add-department.scss'
})
export class AddDepartmentComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly heads = ['Ava Martinez', 'Noah Patel', 'Mia Chen', 'Ethan Clark', 'Sofia Ramirez', 'Liam Brooks'];

  readonly departmentForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    head: ['', Validators.required],
    budget: ['', Validators.required],
    description: ['']
  });

  submit(): void {
    if (this.departmentForm.invalid) {
      this.departmentForm.markAllAsTouched();
      return;
    }

    console.log('New department:', this.departmentForm.getRawValue());
    this.router.navigate(['/departments']);
  }

  cancel(): void {
    this.router.navigate(['/departments']);
  }
}
