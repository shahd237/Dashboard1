import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email = '';
  password = '';
  showPass = false;
  error = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {    // Dependency Injection
    if (this.auth.isLoggedIn) this.router.navigate(['/dashboard']);
  }

  submit(): void {
    this.error = '';
    if (!this.email || !this.password) { this.error = 'يرجى إدخال البريد الإلكتروني وكلمة المرور'; return; }
    this.loading = true;
    setTimeout(() => {
      if (this.auth.login(this.email, this.password)) {
        this.router.navigate(['/dashboard']);
      } else {
        this.error = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
        this.loading = false;
      }
    }, 600);
  }
}
