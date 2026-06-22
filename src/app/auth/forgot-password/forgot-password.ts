import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth';

type Step = 'form' | 'sent' | 'reset' | 'done';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {
  step: Step = 'form';
  email = ''; 
  newPass = ''; 
  confirmPass = '';
  error = ''; 
  loading = false;

  constructor(private auth: AuthService, private router: Router) {} // Dependency Injection

  sendEmail(): void {
    if (!this.email) { 
      this.error = 'يرجى إدخال البريد الإلكتروني';
      return; 
    }

    this.error = ''; 
    this.loading = true;
    setTimeout(() => { 
      this.loading = false; 
      this.step = 'sent'; 
    }, 700);
  }

  goToReset(): void { 
    this.step = 'reset'; 
  }

  resetPassword(): void {
    if (!this.newPass || this.newPass !== this.confirmPass) {
      this.error = 'كلمة المرور غير متطابقة'; return;
    }
    this.error = ''; 
    this.loading = true;
    setTimeout(() => { 
      this.loading = false; 
      this.step = 'done'; 
    }, 700);
  }

  goToLogin(): void { 
    this.router.navigate(['/login']); 
  }
}
