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
    { value: '31', label: 'طلبات جديدة', sublabel: 'عرض الكل', icon: 'orders' },
    { value: '15', label: 'جاهزة للتسليم', sublabel: 'عرض الكل', icon: 'clients' },
    { value: '24', label: 'قيد الأصلاح', sublabel: 'عرض الكل', icon: 'pending' },
    { value: '532', label: 'الطلبات المكتملة', sublabel: 'هذا الأسبوع +8', icon: 'completed' },
    { value: '1,250', label: 'إجمالي الطلبات', sublabel: 'عرض الكل', icon: 'rating' },
  ];
}
