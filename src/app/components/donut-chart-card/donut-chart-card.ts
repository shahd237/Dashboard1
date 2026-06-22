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
    { label: 'تحويل بنكي', value: 18, color: '#34c7c1' },
    { label: 'بطاقة ائتمان', value: 12, color: '#f5a623' },
    { label: 'نقدي', value: 36, color: '#161c45' },
    { label: 'محفظة رقمية', value: 6, color: '#1b2a52' },
    { label: 'أخرى', value: 28, color: '#7c93e8' },
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
