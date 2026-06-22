import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ActivityItem {
  name: string;
  date: string;
  status: 'pending' | 'inprogress' | 'completed' | 'new' | 'scheduled';
  progress: number;
}

@Component({
  selector: 'app-activity-list-card',
  imports: [CommonModule],
  templateUrl: './activity-list-card.html',
  styleUrl: './activity-list-card.scss',
})
export class ActivityListCard {
  items: ActivityItem[] = [
    { name: 'جديد', date: '12 يونيو 2026', status: 'new', progress: 20 },
    { name: 'مكتمل', date: '10 يونيو 2026', status: 'completed', progress: 100 },
    { name: 'قيد التنفيذ', date: '14 يونيو 2026', status: 'inprogress', progress: 55 },
    { name: 'مجدول', date: '16 يونيو 2026', status: 'scheduled', progress: 40 },
    { name: 'مكتمل', date: '9 يونيو 2026', status: 'completed', progress: 100 },
    { name: 'قيد الانتظار', date: '17 يونيو 2026', status: 'pending', progress: 10 },
  ];

  statusLabel(status: ActivityItem['status']): string {
    const map: Record<ActivityItem['status'], string> = {
      new: 'جديد',
      completed: 'مكتمل',
      inprogress: 'قيد التنفيذ',
      scheduled: 'مجدول',
      pending: 'قيد الانتظار',
    };
    return map[status];
  }
}
