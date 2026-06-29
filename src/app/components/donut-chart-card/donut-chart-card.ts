import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Segment {
  label: string;
  value: number;
  color: string;
  dashArray: number;
  dashOffset: number;
}

@Component({
  selector: 'app-donut-chart-card',
  imports: [CommonModule],
  templateUrl: './donut-chart-card.html',
  styleUrl: './donut-chart-card.scss',
})
export class DonutChartCard {
  centerLabel = 'AED';
  centerValue = 'إجمالي الإيرادات';

  private raw: { label: string; value: number; color: string }[] = [
    { label: 'طلبات جديدة', value: 15, color: '#738CE6' },
    { label: 'تحت الفحص', value: 25, color: '#130480' },
    { label: 'قيد الأصلاح', value: 15, color: '#1A2950' },
    { label: 'تم التصليح', value: 20, color: '#FFAE4C' },
    { label: 'جاهز للتسليم', value: 15, color: '#3CC3DF' },
  ];

  segments: Segment[] = this.computeSegments();

  private computeSegments(): Segment[] {
    const circumference = 2 * Math.PI * 15.9155; // r for viewBox 36, matches 100 total dasharray
    let cumulative = 0;
    return this.raw.map((seg) => {
      const dashArray = (seg.value / 100) * circumference;
      const dashOffset = circumference - (cumulative / 100) * circumference;
      cumulative += seg.value;
      return {
        label: seg.label,
        value: seg.value,
        color: seg.color,
        dashArray,
        dashOffset,
      };
    });
  }

  totalCircumference = 2 * Math.PI * 15.9155;
}
