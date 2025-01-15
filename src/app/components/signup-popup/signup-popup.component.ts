import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  standalone: false,
  selector: 'app-signup-popup',
  templateUrl: './signup-popup.component.html',
})
export class SignupPopupComponent {
  username = '';
  name = '';
  password = '';

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<SignupPopupComponent>
  ) {}

  signup() {
    if (this.name && this.username && this.password) {
      this.authService.registerUser(this.name, this.username, this.password);
      alert('Signup successful!');
      this.dialogRef.close();
    } else {
      alert('Please fill out all fields.');
    }
  }
}
