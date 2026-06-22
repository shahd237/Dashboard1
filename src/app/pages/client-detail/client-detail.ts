import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataTable, ColumnDef } from '../../shared/data-table/data-table';

@Component({
  selector: 'app-client-detail',
  imports: [CommonModule, RouterLink, DataTable],
  templateUrl: './client-detail.html',
  styleUrl: './client-detail.scss',
})
export class ClientDetail {
  client = {
    name: 'أحمد سالم',
    phone: '0555123456',
    email: 'ahmed@mail.com',
    city: 'الرياض',
    joinDate: '10 فبراير 2024',
    avatar: 'https://i.pravatar.cc/100?img=12',
  };

  stats = [
    { label: 'إجمالي الطلبات', value: '12' },
    { label: 'مكتملة', value: '9' },
    { label: 'قيد التنفيذ', value: '2' },
    { label: 'ملغاة', value: '1' },
  ];

  columns: ColumnDef[] = [
    { key: 'id', header: 'رقم الطلب' },
    { key: 'device', header: 'الجهاز' },
    { key: 'date', header: 'التاريخ' },
    { key: 'price', header: 'المبلغ' },
    { key: 'status', header: 'الحالة', type: 'badge' },
  ];

  rows = [
    { id: '#4582', device: 'iPhone 14 Pro', date: '12 يونيو 2026', price: '350 ر.س', status: 'مكتمل' },
    { id: '#4495', device: 'MacBook Air', date: '2 مايو 2026', price: '620 ر.س', status: 'مكتمل' },
    { id: '#4390', device: 'Samsung S23', date: '15 مارس 2026', price: '210 ر.س', status: 'قيد التنفيذ' },
    { id: '#4210', device: 'iPad Pro', date: '1 يناير 2026', price: '440 ر.س', status: 'مكتمل' },
  ];
}
