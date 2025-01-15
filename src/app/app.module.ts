import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { LoginPopupComponent } from './components/login-popup/login-popup.component';
import { SignupPopupComponent } from './components/signup-popup/signup-popup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPopupComponent,
    SignupPopupComponent,
    DashboardComponent,
    ClientFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: 'signup', component: ClientFormComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]),
  ],
  providers: [AuthService,MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
