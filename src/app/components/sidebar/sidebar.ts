import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem { label: string; icon: string; route: string; }

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  brandName = 'لـحـظـة';

  navItems: NavItem[] = [
    { label: 'الرئيسية',        icon: 'grid',      route: '/dashboard' },
    { label: 'إدارة الطلبات',   icon: 'tool',      route: '/maintenance-requests' },
    { label: 'العملاء',          icon: 'users',     route: '/clients' },
    { label: 'طلبات الاشتراك',  icon: 'inbox',     route: '/subscription-requests' },
    { label: 'نتائج الفحص',     icon: 'report',    route: '/reports' },
    { label: 'متجر الهواتف',    icon: 'phone',     route: '/devices' },
    { label: 'مراجعة الهواتف',  icon: 'review',    route: '/technicians' },
    { label: 'المحادثات',        icon: 'contacts',  route: '/contacts' },
    { label: 'العروض',           icon: 'megaphone', route: '/marketing' },
    { label: 'الاشعارات',        icon: 'bell',      route: '/settings' },
  ];
}
