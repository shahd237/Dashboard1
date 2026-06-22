import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Pagination } from '../../shared/pagination/pagination';

export interface SubRequest {
  id: string; txnId: string; userName: string; phone: string;
  paymentMethod: string; receiptThumb: string;
  date: string; time: string; amount: string;
  status: 'بانتظار المراجعة' | 'مقبول' | 'مرفوض';
}

@Component({
  selector: 'app-subscription-requests',
  imports: [CommonModule, FormsModule, Pagination],
  templateUrl: './subscription-requests.html',
  styleUrl: './subscription-requests.scss',
})
export class SubscriptionRequests {
  constructor(private router: Router) {}

  stats = [
    { label: 'الكل', value: 31, color: 'black', filter: 'all' },
    { label: 'بانتظار المراجعة', value: 14, color: 'blue', filter: 'بانتظار المراجعة' },
    { label: 'مقبول', value: 86, color: 'green', filter: 'مقبول' },
  ];

  filterStatus = 'all';
  searchTerm = '';
  fromDate = '';
  toDate = '';
  paymentFilter = 'جميع طرق الدفع';
  paymentMethods = ['جميع طرق الدفع', 'فودافون كاش', 'Vodafone Cash', 'انستاباي', 'بطاقة ائتمان'];

  rows: SubRequest[] = [
    { id: '1', txnId: '985330842167', userName: 'أحمد محمد علي', phone: '01258656525', paymentMethod: 'فودافون كاش', receiptThumb: '', date: '10-5-2026', time: '10:30 ص', amount: '10 جنية', status: 'بانتظار المراجعة' },
    { id: '2', txnId: '685339852387', userName: 'أسمد محمد علي', phone: '01258999925', paymentMethod: 'فودافون كاش', receiptThumb: '', date: '10-5-2026', time: '10:30 ص', amount: '10 جنية', status: 'بانتظار المراجعة' },
    { id: '3', txnId: '945330852087', userName: 'أحمد محمد علي', phone: '01258658525', paymentMethod: 'فودافون كاش', receiptThumb: '', date: '10-5-2026', time: '10:33 ص', amount: '10 جنية', status: 'مقبول' },
    { id: '4', txnId: '985330842297', userName: 'أحمد محمد علي', phone: '01256656525', paymentMethod: 'فودافون كاش', receiptThumb: '', date: '10-5-2026', time: '10:30 ص', amount: '10 جنية', status: 'بانتظار المراجعة' },
    { id: '5', txnId: '685330845097', userName: 'أسمد محمد علي', phone: '01258688525', paymentMethod: 'فودافون كاش', receiptThumb: '', date: '10-5-2026', time: '10:30 ص', amount: '10 جنية', status: 'بانتظار المراجعة' },
    { id: '6', txnId: '605330845207', userName: 'أحمد محمد علي', phone: '01258658525', paymentMethod: 'فودافون كاش', receiptThumb: '', date: '10-5-2026', time: '10:30 ص', amount: '10 جنية', status: 'بانتظار المراجعة' },
  ];

  get filtered(): SubRequest[] {
    return this.rows.filter(r => {
      if (this.filterStatus !== 'all' && r.status !== this.filterStatus) return false;
      if (this.searchTerm && !r.txnId.includes(this.searchTerm) && !r.userName.includes(this.searchTerm)) return false;
      return true;
    });
  }

  setFilter(f: string) { this.filterStatus = f; }

  openDetail(row: SubRequest) {
    this.router.navigate(['/subscription-requests', row.id], { state: { row } });
  }

  statusClass(s: string) {
    return s === 'مقبول' ? 'status-accepted' : s === 'مرفوض' ? 'status-rejected' : 'status-pending';
  }
}
