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
    phone: '01098540717',
    email: 'shahdsh237@mail.com',
    city: 'شارع الهرم - الجيزة',
    joinDate: '10-5-2026',
    status: 'نشط',
    avatar: 'assets/image/f1326acd84b14d7fca1da878a3fa9ec7be74ee69.jpg',
  };

  stats = [
    { label: 'طلبات قيد العمل', value: '2',end:"طلب" },
    { label: 'طلبات مكتملة', value: '6',end:"طلب" },
    { label: 'عدد طلبات الصيانة', value: '8',end:"طلب" },
    { label: 'اجمالي المدفعات', value: '4,550' ,end:"جنية"},
  ];

  columns: ColumnDef[] = [
    { key: 'id', header: 'رقم الطلب' },
    { key: 'device', header: 'الجهاز' },
    { key: 'date', header: 'التاريخ' },
    { key: 'price', header: 'المبلغ' },
    { key: 'status', header: 'الحالة', type: 'badge' },
  ];

  rows = [
    { id: '#4495', device: 'iPhone 13', date: 'جاهز للتسليم', status: '15-6-2026' },
    { id: '#4582', device: 'iPhone 13', date: 'جاهز للتسليم', status:'15-6-2026' },
    { id: '#4390', device: 'iPhone 13', date: 'جاهز للتسليم', status:'15-6-2026' },
    { id: '#4210', device: 'iPhone 13', date: 'جاهز للتسليم', status:'15-6-2026' },
    { id: '#4582', device: 'iPhone 13', date: 'جاهز للتسليم', status:'15-6-2026' },
    { id: '#4390', device: 'iPhone 13', date: 'جاهز للتسليم', status:'15-6-2026' },
    { id: '#4210', device: 'iPhone 13', date: 'جاهز للتسليم', status:'15-6-2026' },
  ];
}
