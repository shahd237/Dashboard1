import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-marketing-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './marketing-details.html',
  styleUrls: ['./marketing-details.scss'],
})
export class MarketingDetails {
   form = {
    titleAr: '', titleEn: '', description: '', type: '', discount: '',
    startDate: '', endDate: '', status: 'نشط', isActive: true,
  };
  offerTypes = ['خصم',
   'شحن مجاني', 'عرض مدة', 'هدية'];
  submit() { alert('تم إضافة العرض بنجاح!'); }
}
