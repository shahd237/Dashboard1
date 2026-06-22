import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-technician-assign',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './technician-assign.html',
  styleUrl: './technician-assign.scss',
})
export class TechnicianAssign {
  form = {
    requestId: '#4582', clientName: 'أحمد سالم', phone: '0555123456',
    deviceType: 'iPhone 14 Pro', problem: 'شاشة مكسورة',
    technicianId: '', scheduledDate: '', scheduledTime: '',
    estimatedDuration: '2', priority: 'عالية',
    notes: '', address: 'الرياض - حي النزهة', status: 'جديد',
  };
  technicians = [
    { id: '1', name: 'محمود يوسف' },
    { id: '2', name: 'خالد عمر' },
    { id: '3', name: 'عبدالله ناصر' },
    { id: '4', name: 'عمر الرشيدي' },
  ];
  priorities = ['عالية', 'متوسطة', 'منخفضة'];

  clientInfo = {
    phone: '0555123456', email: 'ahmed@mail.com', city: 'الرياض',
    totalOrders: 12, completedOrders: 9, deviceImage: '',
  };

  submit() { alert('تم تكليف الفني بنجاح!'); }
}
