import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatCard } from '../components/stat-card/stat-card';
import { LineChartCard } from '../components/line-chart-card/line-chart-card';
import { ActivityListCard } from '../components/activity-list-card/activity-list-card';
import { PromoBannerCard } from '../components/promo-banner-card/promo-banner-card';
import { DonutChartCard } from '../components/donut-chart-card/donut-chart-card';

interface StatDatum {
  value: string;
  label: string;
  sublabel: string;
  icon: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    StatCard,
    LineChartCard,
    ActivityListCard,
    PromoBannerCard,
    DonutChartCard,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  stats: StatDatum[] = [
    { value: '1,256', label: 'إجمالي الطلبات', sublabel: 'هذا الشهر', icon: 'orders' },
    { value: '432', label: 'إجمالي العملاء', sublabel: 'عميل نشط', icon: 'clients' },
    { value: '34', label: 'طلبات قيد الانتظار', sublabel: 'طلب قيد الانتظار', icon: 'pending' },
    { value: '18', label: 'طلبات مكتملة', sublabel: 'هذا الأسبوع', icon: 'completed' },
    { value: '21', label: 'تقييم الخدمة', sublabel: 'تقييم عام', icon: 'rating' },
  ];
}
