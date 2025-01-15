import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  standalone: false,
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
})
export class LoginPopupComponent {
  username = 'hh';
  password = 'hh';

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialogRef: MatDialogRef<LoginPopupComponent>
  ) {}

  login() {
    if (this.authService.loginUser(this.username, this.password)) {
      alert('Login successful!');
      this.dialogRef.close();
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
