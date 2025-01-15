import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  selectedClient: any = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Fetch the selected client from the AuthService
    let c = this.authService.getSelectedClient() ?? null;
    this.selectedClient = c;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
