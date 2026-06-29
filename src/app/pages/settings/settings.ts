import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
type NotificationTypeKey = 'maintenance' | 'offer';
type NotificationStatusKey = 'sent' | 'draft';

interface NotificationItem {
  id: number;
  title: string;
  type: string;
  typeKey: NotificationTypeKey;
  receiverName: string;
  receiverPhone: string;
  date: string;
  time: string;
  fullDate: string;
  status: string;
  statusKey: NotificationStatusKey;
  body: string;
  recipients: number;
}

@Component({
  selector: 'app-settings',
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})


export class Settings {
  constructor(private router:Router){}
  searchTerm = '';
  selectedStatus: 'all' | NotificationStatusKey = 'all';
  currentPage = 1;
  pageSize = 9;
  selectedNotification: NotificationItem | null = null;

  notifications: NotificationItem[] = [
    {
      id: 1,
      title: 'تم قبول طلب الصيانة',
      type: 'طلب صيانة',
      typeKey: 'maintenance',
      receiverName: 'احمد محمد',
      receiverPhone: '01229876358',
      date: '10-5-2026',
      time: '10:30ص',
      fullDate: '10 مايو 2026 - 10:30 ص',
      status: 'تم الإرسال',
      statusKey: 'sent',
      body: 'تم قبول طلب الصيانة رقم ORD-10025 وسيتم فحص المشكلة في أقرب وقت',
      recipients: 1,
    },
    {
      id: 2,
      title: 'خصم 50% علي جميع الخدمات',
      type: 'عرض ترويجي',
      typeKey: 'offer',
      receiverName: 'جميع المستخدمين',
      receiverPhone: 'إجمالي 550 عميل',
      date: '10-5-2026',
      time: '10:30ص',
      fullDate: '10 مايو 2026 - 10:30 ص',
      status: 'تم الإرسال',
      statusKey: 'sent',
      body: 'خصم 50% علي جميع خدمات الصيانة لفترة محدودة',
      recipients: 550,
    },
    {
      id: 3,
      title: 'تم قبول طلب الصيانة',
      type: 'طلب صيانة',
      typeKey: 'maintenance',
      receiverName: 'احمد محمد',
      receiverPhone: '01229876358',
      date: '10-5-2026',
      time: '10:30ص',
      fullDate: '10 مايو 2026 - 10:30 ص',
      status: 'تم الإرسال',
      statusKey: 'sent',
      body: 'تم قبول طلب الصيانة رقم ORD-10025 وسيتم فحص المشكلة في أقرب وقت',
      recipients: 1,
    },
    {
      id: 4,
      title: 'خصم 50% علي جميع الخدمات',
      type: 'عرض',
      typeKey: 'offer',
      receiverName: 'احمد محمد',
      receiverPhone: '01229876358',
      date: '10-5-2026',
      time: '10:30ص',
      fullDate: '10 مايو 2026 - 10:30 ص',
      status: 'تم الإرسال',
      statusKey: 'sent',
      body: 'خصم 50% علي جميع الخدمات',
      recipients: 1,
    },
    {
      id: 5,
      title: 'تم قبول طلب الصيانة',
      type: 'طلب صيانة',
      typeKey: 'maintenance',
      receiverName: 'احمد محمد',
      receiverPhone: '01229876358',
      date: '10-5-2026',
      time: '10:30ص',
      fullDate: '10 مايو 2026 - 10:30 ص',
      status: 'تم الإرسال',
      statusKey: 'sent',
      body: 'تم قبول طلب الصيانة رقم ORD-10025 وسيتم فحص المشكلة في أقرب وقت',
      recipients: 1,
    },
     {
      id: 6,
      title: 'تم قبول طلب الصيانة',
      type: 'طلب صيانة',
      typeKey: 'maintenance',
      receiverName: 'احمد محمد',
      receiverPhone: '01229876358',
      date: '10-5-2026',
      time: '10:30ص',
      fullDate: '10 مايو 2026 - 10:30 ص',
      status: 'تم الإرسال',
      statusKey: 'sent',
      body: 'تم قبول طلب الصيانة رقم ORD-10025 وسيتم فحص المشكلة في أقرب وقت',
      recipients: 1,
    },
     {
      id: 7,
      title: 'تم قبول طلب الصيانة',
      type: 'طلب صيانة',
      typeKey: 'maintenance',
      receiverName: 'احمد محمد',
      receiverPhone: '01229876358',
      date: '10-5-2026',
      time: '10:30ص',
      fullDate: '10 مايو 2026 - 10:30 ص',
      status: 'تم الإرسال',
      statusKey: 'sent',
      body: 'تم قبول طلب الصيانة رقم ORD-10025 وسيتم فحص المشكلة في أقرب وقت',
      recipients: 1,
    },
     {
      id: 5,
      title: 'تم قبول طلب الصيانة',
      type: 'طلب صيانة',
      typeKey: 'maintenance',
      receiverName: 'احمد محمد',
      receiverPhone: '01229876358',
      date: '10-5-2026',
      time: '10:30ص',
      fullDate: '10 مايو 2026 - 10:30 ص',
      status: 'تم الإرسال',
      statusKey: 'sent',
      body: 'تم قبول طلب الصيانة رقم ORD-10025 وسيتم فحص المشكلة في أقرب وقت',
      recipients: 1,
    },
  ];

  get filteredNotifications(): NotificationItem[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.notifications.filter((notification) => {
      const matchesSearch =
        !term ||
        notification.title.toLowerCase().includes(term) ||
        notification.type.toLowerCase().includes(term) ||
        notification.receiverName.toLowerCase().includes(term);

      const matchesStatus =
        this.selectedStatus === 'all' || notification.statusKey === this.selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredNotifications.length / this.pageSize));
  }

  get pages(): number[] {
    return Array.from({ length: 6 }, (_, index) => index + 1);
  }

  get pagedNotifications(): NotificationItem[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredNotifications.slice(start, start + this.pageSize);
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
    }
  }

  openDetails(notification: NotificationItem): void {
    this.selectedNotification = notification;
  }

  closeDetails(): void {
    this.selectedNotification = null;
  }

  addNotification(): void {
    this.router.navigate(['notifications']);
  }

  deleteNotification(notification: NotificationItem): void {
    const index = this.notifications.indexOf(notification);
    if (index !== -1) {
      this.notifications.splice(index, 1);
    }
  }
}

