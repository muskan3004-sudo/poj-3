import { Component, OnInit } from '@angular/core';
import { LoginPopupComponent } from '../login-popup/login-popup.component';
import { SignupPopupComponent } from '../signup-popup/signup-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  standalone: false,
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  clients: any[] = [
    {
      id: 1,
      name: 'Client A',
      themeClass: 'theme-client-a',
      description: 'Client A specializes in technology solutions.',
      industry: 'Technology',
      headquarters: 'San Francisco, CA',
      ceo: 'John Doe',
      marketShare: '15%', // Market share percentage in their industry
      majorProducts: 'AI Platforms, Cloud Services, Data Analytics Tools',
      website: 'https://www.clienta.com',
      linkedin: 'https://www.linkedin.com/company/clienta',
      twitter: 'https://twitter.com/clienta',
      recentAchievements: 'Top Innovator 2024, Best AI Solution Award',
      competitors: 'Client B, TechCorp, Innovatech',
      customerBase: 'Enterprises, Small Businesses, Startups',
    },
    {
      id: 2,
      name: 'Client B',
      themeClass: 'theme-client-b',
      description: 'Client B focuses on healthcare and wellness.',
      industry: 'Healthcare',
      headquarters: 'New York, NY',
      ceo: 'Jane Smith',
      marketShare: '20%', // Market share percentage in their industry
      majorProducts:
        'Health Monitoring Devices, Wellness Programs, Telehealth Platforms',
      website: 'https://www.clientb.com',
      linkedin: 'https://www.linkedin.com/company/clientb',
      twitter: 'https://twitter.com/clientb',
      recentAchievements:
        'Top Healthcare Innovator 2024, Best Patient Care Solution',
      competitors: 'Client A, HealthTech Inc., WellnessWorld',
      customerBase: 'Hospitals, Clinics, Individuals',
    },
    {
      id: 3,
      name: 'Client C',
      themeClass: 'theme-client-c',
      description: 'Client C is a leader in e-commerce.',
      industry: 'Retail',
      headquarters: 'Seattle, WA',
      ceo: 'Emily Taylor',
      marketShare: '25%', // Market share percentage in their industry
      majorProducts:
        'Online Marketplace, Logistics Solutions, Retail Analytics',
      website: 'https://www.clientc.com',
      linkedin: 'https://www.linkedin.com/company/clientc',
      twitter: 'https://twitter.com/clientc',
      recentAchievements:
        'E-commerce Leader Award 2024, Top Customer Experience Solution',
      competitors: 'RetailCo, ShopWorld, Client A',
      customerBase: 'Retailers, Consumers, Suppliers',
    },
  ];
  selectedClient: any = null;
  constructor(private dialog: MatDialog, private authService: AuthService,
  private router: Router) {
    this.authService.setSelectedClient(this.selectedClient);
  }

  openLogin() {
    this.dialog.open(LoginPopupComponent);
  }

  openSignup() {
    this.router.navigate(['/signup']);
  }

  onClientChange(): void {
    if (this.selectedClient) {
      this.authService.setSelectedClient(this.selectedClient);
    }
  }
}
