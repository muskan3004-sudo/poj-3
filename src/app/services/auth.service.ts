import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  name: string;
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [];
  private isAuthenticated = false;
  private selectedClientSubject = new BehaviorSubject<string>('');
  selectedClient$ = this.selectedClientSubject.asObservable();

  registerUser(name: string, username: string, password: string) {
    this.users.push({ name, username, password });
    this.isAuthenticated = true;
    this.isAuthenticated;
  }

  loginUser(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    this.isAuthenticated = !!user;
    return true;
  }

  // Method to update the selected client
  setSelectedClient(client: string): void {
    this.selectedClientSubject.next(client);
  }

  // Method to get the current selected client
  getSelectedClient(): string {
    return this.selectedClientSubject.value;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout() {
    this.isAuthenticated = false;
  }
}
