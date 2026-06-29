import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Dashboard } from '../../dashboard/dashboard'; 
@Component({
  selector: 'app-logout',
  imports: [Dashboard],
  templateUrl: './logout.html',
  styleUrl: './logout.scss',
})
export class Logout {
  constructor(private auth: AuthService) {}
  confirm(): void { this.auth.logout(); }
  cancel(): void { window.history.back(); }
}
