import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { AuthService } from '../../services/auth';

interface NotificationItem {
  title: string;
  message: string;
  time: string;
  iconPath: string;
}

@Component({
  selector: 'app-topbar',
  imports: [CommonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar implements OnInit, OnDestroy {
  @Output() menuToggle = new EventEmitter<void>();

  pageTitle = 'الرئيسية';
  isNotificationsOpen = false;

  notifications: NotificationItem[] = [
    {
      title: 'طلب صيانة جديد',
      message: 'طلب صيانة من العميل محمد علي',
      time: 'منذ دقيقة واحدة',
      iconPath: 'M6 6h15l-1.5 9h-12L6 6ZM6 6 5.5 3H3M9 19.5h.01M17 19.5h.01',
    },
    {
      title: 'اشتراك جديد',
      message: 'تم إرسال طلب اشتراك جديد',
      time: 'منذ 30 دقيقة',
      iconPath: 'M16 21v-2a4 4 0 0 0-8 0v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19 8v6M22 11h-6',
    },
    {
      title: 'رسالة جديدة',
      message: 'لديك رسالة جديدة من العميل أحمد محمد',
      time: 'منذ ساعة واحدة',
      iconPath: 'M12 20a8 8 0 1 0-8-8v7l2.2-1.1A8 8 0 0 0 12 20ZM9 12h.01M12 12h.01M15 12h.01',
    },
    {
      title: 'اشتراك جديد',
      message: 'تم إرسال طلب اشتراك جديد',
      time: 'منذ 30 دقيقة',
      iconPath: 'M16 21v-2a4 4 0 0 0-8 0v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19 8v6M22 11h-6',
    },
    {
      title: 'رسالة جديدة',
      message: 'لديك رسالة جديدة من العميل أحمد محمد',
      time: 'منذ ساعة واحدة',
      iconPath: 'M12 20a8 8 0 1 0-8-8v7l2.2-1.1A8 8 0 0 0 12 20ZM9 12h.01M12 12h.01M15 12h.01',
    },
    {
      title: 'طلب صيانة جديد',
      message: 'طلب صيانة من العميل محمد علي',
      time: 'منذ دقيقة واحدة',
      iconPath: 'M6 6h15l-1.5 9h-12L6 6ZM6 6 5.5 3H3M9 19.5h.01M17 19.5h.01',
    },
  ];

  private sub?: Subscription;

  get userName(): string {
    return this.auth.currentUser?.name ?? 'مستخدم';
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.updateTitle();

    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.updateTitle());
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  toggleMenu(): void {
    this.menuToggle.emit();
  }

  toggleNotifications(): void {
    this.isNotificationsOpen = !this.isNotificationsOpen;
  }

  closeNotifications(): void {
    this.isNotificationsOpen = false;
  }

  viewAllNotifications(): void {
    this.closeNotifications();
    // this.router.navigate(['/notifications']);
  }

  private updateTitle(): void {
    let child = this.route.root;
    while (child.firstChild) child = child.firstChild;
    this.pageTitle = child.snapshot.data['title'] ?? 'الرئيسية';
  }
}