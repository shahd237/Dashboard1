import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PointDatum {
  x: number;
  y: number;
}

@Component({
  selector: 'app-line-chart-card',
  imports: [CommonModule],
  templateUrl: './line-chart-card.html',
  styleUrl: './line-chart-card.scss',
})
export class LineChartCard {
  months = ['ينا', 'فبر', 'مار', 'ابر', 'ماي', 'يون', 'يول'];

  // Raw data values (arbitrary units) approximating the reference chart's shape
  private values = [38, 62, 78, 45, 22, 58, 64];

  private width = 560;
  private height = 190;
  private paddingX = 16;
  private paddingTop = 14;
  private paddingBottom = 26;

  points: PointDatum[] = this.computePoints();

  linePath = this.buildSmoothPath(this.points);
  areaPath = this.buildAreaPath(this.points);

  gridLines = [0, 1, 2, 3].map((i) => this.paddingTop + (i * (this.height - this.paddingTop - this.paddingBottom)) / 3);

  private computePoints(): PointDatum[] {
    const max = Math.max(...this.values);
    const min = Math.min(...this.values);
    const range = max - min || 1;
    const usableWidth = this.width - this.paddingX * 2;
    const usableHeight = this.height - this.paddingTop - this.paddingBottom;
    const step = usableWidth / (this.values.length - 1);

    return this.values.map((v, i) => {
      const x = this.paddingX + i * step;
      const normalized = (v - min) / range;
      const y = this.paddingTop + (1 - normalized) * usableHeight;
      return { x, y };
    });
  }

  private buildSmoothPath(pts: PointDatum[]): string {
    if (pts.length === 0) return '';
    if (pts.length === 1) return `M ${pts[0].x} ${pts[0].y}`;

    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i];
      const p1 = pts[i + 1];
      const cpOffset = (p1.x - p0.x) / 2;
      const c1x = p0.x + cpOffset;
      const c1y = p0.y;
      const c2x = p1.x - cpOffset;
      const c2y = p1.y;
      d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p1.x} ${p1.y}`;
    }
    return d;
  }

  private buildAreaPath(pts: PointDatum[]): string {
    if (pts.length === 0) return '';
    const line = this.buildSmoothPath(pts);
    const last = pts[pts.length - 1];
    const first = pts[0];
    const floorY = this.height - this.paddingBottom;
    return `${line} L ${last.x} ${floorY} L ${first.x} ${floorY} Z`;
  }
}
