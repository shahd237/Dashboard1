import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-technician-tracking',
  imports: [CommonModule, FormsModule],
  templateUrl: './technician-tracking.html',
  styleUrl: './technician-tracking.scss',
})
export class TechnicianTracking {
  request = { id: '#4582', client: 'أحمد سالم', device: 'iPhone 14 Pro', status: 'قيد التنفيذ' };
  technician = { name: 'محمود يوسف', phone: '0551234567', rating: 4.8 };
  timeline = [
    { label: 'تم استلام الطلب', time: '9:00 ص', done: true },
    { label: 'في الطريق', time: '9:30 ص', done: true },
    { label: 'وصل الفني', time: '10:00 ص', done: true },
    { label: 'قيد الإصلاح', time: '10:15 ص', done: false },
    { label: 'تم الإصلاح', time: '--', done: false },
  ];
  stats = [
    { label: 'المسافة المتبقية', value: '2.5 كم' },
    { label: 'الوقت المتوقع', value: '15 دق' },
    { label: 'وقت الوصول', value: '10:15 ص' },
  ];
  deliveryInfo = [
    { label: 'المسؤول', value: 'محمود يوسف' },
    { label: 'رقم الهاتف', value: '0551234567' },
    { label: 'نوع الزيارة', value: 'صيانة' },
    { key: 'رقم الزيارة', value: '#4582' },
    { label: 'نوع الطلب', value: 'إصلاح شاشة' },
    { label: 'نوع العطل', value: 'شاشة مكسورة' },
  ];
  updateFields = [
    { label: 'حالة الطلب', value: 'قيد التنفيذ' },
    { label: 'مبلغ الطلب', value: '350 ر.س' },
    { label: 'رقم الطلب', value: '#4582' },
    { label: 'نوع الخدمة', value: 'إصلاح' },
    { label: 'نوع العطل', value: '' },
  ];
}
