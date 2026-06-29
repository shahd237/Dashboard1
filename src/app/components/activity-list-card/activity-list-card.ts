import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ActivityItem {
  name: string;
  date: string;
  status: 'pending' | 'inprogress' | 'completed' | 'new' | 'scheduled';
  progress: number;
  type:string
}

@Component({
  selector: 'app-activity-list-card',
  imports: [CommonModule],
  templateUrl: './activity-list-card.html',
  styleUrl: './activity-list-card.scss',
})
export class ActivityListCard {
  items: ActivityItem[] = [
    { type: 'iphone 13',name:"عمر الرشيدي", date: 'منذ 5 دقايق', status: 'new', progress: 100 },
    { type: 'iphone 13',name:"محمود يوسف", date: 'منذ 5 دقايق', status: 'completed', progress: 20 },
    { type: 'iphone 13',name:"يوسف محمود", date: 'منذ 5 دقايق', status: 'inprogress', progress: 55 },
    { type: 'iphone 13',name:"ناصر عبدالله", date: 'منذ 5 دقايق', status: 'scheduled', progress: 40 },
    { type: 'iphone 13',name:"صالح عبدالله", date: 'منذ 5 دقايق', status: 'completed', progress: 100 },
    { type: 'iphone 13',name:"محمود يوسف", date: 'منذ 5 دقايق', status: 'completed', progress: 10 },
  ];

  statusLabel(status: ActivityItem['status']): string {
    const map: Record<ActivityItem['status'], string> = {
      new: 'جديد',
      completed: 'تم الاصلاح',
      inprogress: 'طلب جديد',
      scheduled: 'تحت الفحص',
      pending: 'تم الاصلاح',
    };
    return map[status];
  }
}
