import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  name: string;
  email: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly KEY = 'lhzh_user';

  // Demo credentials
  private DEMO = {
    email: 'admin@lohah.com',
    password: 'admin123',
    name: 'شهد ',
    role: 'مدير النظام',
  };

  constructor(private router: Router) {}

  get isLoggedIn(): boolean {
    return !!localStorage.getItem(this.KEY);
  }

  get currentUser(): User | null {
    const raw = localStorage.getItem(this.KEY);
    return raw ? JSON.parse(raw) : null; // Convert JSON TO Object
  }

  login(email: string, password: string): boolean {
    if (email === this.DEMO.email && password === this.DEMO.password) {
      localStorage.setItem(
        this.KEY,
        JSON.stringify({ name: this.DEMO.name, email, role: this.DEMO.role }),  // Convert Object to String // Local Storage accepts only string
      );
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.KEY);
    this.router.navigate(['/login']);
  }

  sendResetEmail(_email: string): boolean {
    return true;
  } // always succeeds in demo
}
