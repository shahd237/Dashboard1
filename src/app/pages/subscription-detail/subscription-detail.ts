import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SubRequest } from '../subscription-requests/subscription-requests';

@Component({
  selector: 'app-subscription-detail',
  imports: [CommonModule],
  templateUrl: './subscription-detail.html',
  styleUrl: './subscription-detail.scss',
})
export class SubscriptionDetail implements OnInit {
  row: SubRequest | null = null;
  approved = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { row: SubRequest } | undefined;
    if (state?.row) {
      this.row = state.row;
    } else {
      // fallback demo data if navigated directly
      this.row = {
        id: '1', txnId: '2752987425',
        userName: 'محمد أحمد علي', phone: '01229875643',
        paymentMethod: 'Vodafone Cash',
        receiptThumb: '',
        date: '15/6/2026', time: '10:40 ص',
        amount: '10 جنية',
        status: 'بانتظار المراجعة',
      };
    }
  }

  approve() {
    if (this.row) {
      this.row.status = 'مقبول';
      this.approved = true;
      setTimeout(() => this.router.navigate(['/subscription-requests']), 1200);
    }
  }

  goBack() { this.router.navigate(['/subscription-requests']); }
}
