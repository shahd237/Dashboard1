import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

// Removed import of IonIcon to avoid dependency on @ionic/angular

@Component({
  selector: 'app-device-detail',
  imports: [ CommonModule, FormsModule, RouterLink],
  templateUrl: './device-detail.html',
  styleUrl: './device-detail.scss',
})
export class DeviceDetail {
  device = {
    brand: 'Apple',
    model: 'iPhone 15',
    storage: '256GB',
    color: '#3a3a3c',
    price: '48,000 ج.م',
    rating: 4.8,
    category: 'هواتف ذكية',
    description: 'هاتف iPhone 15 Pro مع شاشة Super Retina XDR بحجم 6.1 بوصة',
    warranty: '12',
    condition: 'جديد',
    processor: 'A17 Pro',
    ram: '8GB',
    battery: '3274mAh',
  };

  colors = ['#3a3a3c', '#2e4ec0', '#8e8e93', '#e5e5ea', '#ff6b9d'];
  selectedColor = '#3a3a3c';
  storageOptions = ['128GB', '256GB', '512GB', '1TB'];
  selectedStorage = '256GB';
  readonly specifications = [
    { label: 'الكاميرا الامامية' },
    { label: 'الكاميرا الخلفية' },
    { label: 'المعالج' },
    { label: 'الشاشة' },
    { label: 'نظام التشغيل' },
    { label: 'البطارية' },
    { label: 'الذاكرة' },
    { label: 'التخزين الداخلي' },
  ];

  pros = [
    'كاميرا احترافية متطورة',
    'أداء استثنائي مع A17 Pro',
    'شاشة ProMotion 120Hz',
    'بناء من التيتانيوم',
    'بطارية محسّنة للطاقة',
  ];
  cons = ['سعر مرتفع', 'لا يدعم الشحن السريع', 'لا يوجد شاحن في العلبة'];
  specs = [
    { label: 'المعالج', value: 'A17 Pro' },
    { label: 'الذاكرة', value: '8GB' },
    { label: 'الشاشة', value: '6.1 Super Retina' },
    { label: 'البطارية', value: '3274mAh' },
  ];
  ratings = [
    { label: 'التصميم', pct: 92 },
    { label: 'الأداء', pct: 97 },
    { label: 'الكاميرا', pct: 95 },
    { label: 'البطارية', pct: 78 },
    { label: 'القيمة', pct: 72 },
  ];

  repairOrders = [
    { id: '#4582', date: '12 يونيو 2026', issue: 'شاشة مكسورة', price: '350 ر.س', status: 'مكتمل' },
    { id: '#4510', date: '2 مايو 2026', issue: 'بطارية', price: '180 ر.س', status: 'مكتمل' },
    { id: '#4430', date: '14 مارس 2026', issue: 'ميكروفون', price: '210 ر.س', status: 'مكتمل' },
  ];

  save() {
    alert('تم حفظ التغييرات!');
  }
}
