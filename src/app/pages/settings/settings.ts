import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  profile = { name: 'شهد هاشم', email: 'shahd@lohah.com', phone: '0551234567', role: 'مدير النظام' };
  notifications = { newOrders: true, techniciansUpdates: true, systemAlerts: false, marketing: false };
  appSettings = { language: 'ar', currency: 'SAR', timezone: 'Asia/Riyadh' };

  saveProfile(): void { alert('تم حفظ البيانات بنجاح'); }
}
