import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTable, ColumnDef } from '../../shared/data-table/data-table';

interface BarItem { month: string; value: number; }

@Component({
  selector: 'app-reports',
  imports: [CommonModule, DataTable],
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})
export class Reports {
  summaryStats = [
    { label: 'إجمالي الإيرادات', value: '85,420 ر.س', change: '+12%', positive: true },
    { label: 'إجمالي الطلبات', value: '1,256', change: '+8%', positive: true },
    { label: 'متوسط قيمة الطلب', value: '310 ر.س', change: '-2%', positive: false },
    { label: 'رضا العملاء', value: '4.7 / 5', change: '+0.2', positive: true },
  ];

  bars: BarItem[] = [
    { month: 'يناير', value: 58 }, { month: 'فبراير', value: 72 },
    { month: 'مارس', value: 65 }, { month: 'أبريل', value: 85 },
    { month: 'مايو', value: 78 }, { month: 'يونيو', value: 92 },
  ];

  maxBar = Math.max(...this.bars.map(b => b.value));

  columns: ColumnDef[] = [
    { key: 'period', header: 'الفترة' },
    { key: 'orders', header: 'عدد الطلبات' },
    { key: 'revenue', header: 'الإيرادات' },
    { key: 'completed', header: 'مكتملة' },
    { key: 'cancelled', header: 'ملغاة' },
    { key: 'avgOrder', header: 'متوسط الطلب' },
  ];

  rows = [
    { period: 'يونيو 2026', orders: 210, revenue: '65,100 ر.س', completed: 192, cancelled: 18, avgOrder: '310 ر.س' },
    { period: 'مايو 2026', orders: 198, revenue: '61,380 ر.س', completed: 181, cancelled: 17, avgOrder: '310 ر.س' },
    { period: 'أبريل 2026', orders: 215, revenue: '66,650 ر.س', completed: 200, cancelled: 15, avgOrder: '310 ر.س' },
    { period: 'مارس 2026', orders: 183, revenue: '56,730 ر.س', completed: 170, cancelled: 13, avgOrder: '310 ر.س' },
    { period: 'فبراير 2026', orders: 167, revenue: '51,770 ر.س', completed: 155, cancelled: 12, avgOrder: '310 ر.س' },
    { period: 'يناير 2026', orders: 154, revenue: '47,740 ر.س', completed: 143, cancelled: 11, avgOrder: '310 ر.س' },
  ];

  barHeight(value: number): number { return (value / this.maxBar) * 100; }
}
