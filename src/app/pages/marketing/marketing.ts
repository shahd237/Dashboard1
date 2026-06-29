import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
type OfferFilter = 'all' | 'active' | 'expired';
interface Offer {
  id: number;
  title: string;
  type: string;
  discount: number;
  startDate: string;
  endDate: string;
  active: boolean;
}

@Component({
  selector: 'app-marketing',
  imports: [CommonModule, FormsModule],
  templateUrl: './marketing.html',
  styleUrl: './marketing.scss',
})
export class Marketing {
  constructor(private router: Router) {}
  searchTerm = '';
  activeFilter: OfferFilter = 'all';
  currentPage = 1;
  pageSize = 10;

  offers: Offer[] = [
    {
      id: 1,
      title: 'خصم علي تغيير الشاشات',
      type: 'تغيير شاشات',
      discount: 15,
      startDate: '15/6/2026',
      endDate: '20/6/2026',
      active: true,
    },
    {
      id: 2,
      title: 'عرض علي البطاريات',
      type: 'بطاريات',
      discount: 25,
      startDate: '15/6/2026',
      endDate: '20/6/2026',
      active: false,
    },
    {
      id: 3,
      title: 'خصم علي تغيير الشاشات',
      type: 'تغيير شاشات',
      discount: 15,
      startDate: '15/6/2026',
      endDate: '20/6/2026',
      active: true,
    },
    {
      id: 4,
      title: 'خصم علي تغيير الشاشات',
      type: 'تغيير شاشات',
      discount: 15,
      startDate: '15/6/2026',
      endDate: '20/6/2026',
      active: true,
    },
    {
      id: 5,
      title: 'خصم علي تغيير الشاشات',
      type: 'تغيير شاشات',
      discount: 15,
      startDate: '15/6/2026',
      endDate: '20/6/2026',
      active: true,
    },
    {
      id: 6,
      title: 'خصم علي تغيير الشاشات',
      type: 'تغيير شاشات',
      discount: 15,
      startDate: '15/6/2026',
      endDate: '20/6/2026',
      active: true,
    },
    {
      id: 7,
      title: 'خصم علي تغيير الشاشات',
      type: 'تغيير شاشات',
      discount: 15,
      startDate: '15/6/2026',
      endDate: '20/6/2026',
      active: true,
    },
    {
      id: 8,
      title: 'خصم علي تغيير الشاشات',
      type: 'تغيير شاشات',
      discount: 15,
      startDate: '15/6/2026',
      endDate: '20/6/2026',
      active: true,
    },
    {
      id: 9,
      title: 'خصم علي تغيير الشاشات',
      type: 'تغيير شاشات',
      discount: 15,
      startDate: '15/6/2026',
      endDate: '20/6/2026',
      active: true,
    },
    {
      id: 10,
      title: 'خصم علي تغيير الشاشات',
      type: 'تغيير شاشات',
      discount: 15,
      startDate: '15/6/2026',
      endDate: '20/6/2026',
      active: true,
    },
  ];

  get filteredOffers(): Offer[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.offers.filter((offer) => {
      const matchesSearch =
        !term ||
        offer.title.toLowerCase().includes(term) ||
        offer.type.toLowerCase().includes(term);

      const matchesFilter =
        this.activeFilter === 'all' ||
        (this.activeFilter === 'active' && offer.active) ||
        (this.activeFilter === 'expired' && !offer.active);

      return matchesSearch && matchesFilter;
    });
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredOffers.length / this.pageSize));
  }

  get pages(): number[] {
    return Array.from({ length: 6 }, (_, index) => index + 1);
  }

  get pagedOffers(): Offer[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredOffers.slice(start, start + this.pageSize);
  }

  setFilter(filter: OfferFilter): void {
    this.activeFilter = filter;
    this.currentPage = 1;
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
    }
  }

  toggleOffer(offer: Offer): void {
    offer.active = !offer.active;
  }

  // addOffer(): void {}

  addOffer(offer: Offer): void {
    this.router.navigate(['marketing', offer.id]);
  }

  openNewOffer(): void {
    this.router.navigate(['marketing', 'new']);
  }

  openEditOffer(offer: Offer): void {
    this.router.navigate(['edit_marketing', offer.id]);
  }

  deleteOffer(offer: Offer): void {
    const index = this.offers.indexOf(offer);
    if (index !== -1) {
      this.offers.splice(index, 1);
    }
  }
}
