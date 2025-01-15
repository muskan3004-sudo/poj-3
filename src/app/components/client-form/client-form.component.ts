import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent {
  requestForm!: FormGroup;
  sectors = ['Finance', 'IT', 'Healthcare', 'Education', 'Other'];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      // Customer Details
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      preferredName: [''],
      dob: ['', Validators.required],

      // Address
      streetName: [''],
      postcode: [''],
      townLocationName: [''],

      // Employment Details
      employmentStatus: ['', Validators.required],
      sectors: [''],

      // Account Details
      accountName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      currency: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.requestForm.valid) {
      console.log('Form Submitted', this.requestForm.value);
    }
  }

  onCancel(): void {
    this.requestForm.reset();
  }
}
