import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  requestForm!: FormGroup;
  sectors = ['Finance', 'IT', 'Healthcare', 'Education', 'Other'];
  selectedIndex = 0;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.requestForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

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
      this.router.navigate(['/']); 
      console.log('Form Submitted:', this.requestForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  onTabChange(index: number): void {
    this.selectedIndex = index;
    console.log(`Tab changed to: ${index}`);
  }

  nextTab(): void {
    if (this.selectedIndex < 3) {
      this.selectedIndex++;
    }
  }

  previousTab(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }

  isTabValid(tabIndex: number): boolean {
    switch (tabIndex) {
      case 0:
        return this.requestForm.get('username')!.valid && this.requestForm.get('password')!.valid;
      case 1:
        return (
          this.requestForm.get('firstName')!.valid &&
          this.requestForm.get('lastName')!.valid &&
          this.requestForm.get('dob')!.valid
        );
      case 2:
        return this.requestForm.get('employmentStatus')!.valid;
      case 3:
        return (
          this.requestForm.get('accountName')!.valid &&
          this.requestForm.get('accountNumber')!.valid &&
          this.requestForm.get('currency')!.valid
        );
      default:
        return false;
    }
  }

  resetForm(): void {
    this.requestForm.reset();
    this.selectedIndex = 0;
  }
}
