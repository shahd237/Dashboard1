import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
interface OfferForm {
  title: string;
  type: string;
  description: string;
  imageUrl: string;
  discount: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'inactive';
}
@Component({
  selector: 'app-edit-marketing',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-marketing.html',
  styleUrls: ['./edit-marketing.scss'],
})
export class EditMarketing {
  offer: OfferForm = {
    title: 'خصم20% علي جميع خدمات الصيانة',
    type: 'صيانة',
    description: 'استفد بخصم 20% علي جميع خدمات الصيانة',
    imageUrl: 'assets/image/4ec58348f4eae3396673e24c8ed49dadfc153cf6.png',
    discount: '20%',
    startDate: '14/6/2026',
    endDate: '17/6/2026',
    status: 'active',
  };

  onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      this.offer.imageUrl = String(reader.result);
    };

    reader.readAsDataURL(file);
  }

  removeImage(): void {
    this.offer.imageUrl = '';
  }

  updateOffer(): void {
    console.log('Updated offer:', this.offer);
  }

  goBack(): void {
    history.back();
  }
}
