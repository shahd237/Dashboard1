import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marketing',
  imports: [CommonModule, FormsModule],
  templateUrl: './marketing.html',
  styleUrl: './marketing.scss',
})
export class Marketing {
  form = {
    titleAr: '', titleEn: '', description: '', type: '', discount: '',
    startDate: '', endDate: '', status: 'نشط', isActive: true,
  };
  offerTypes = ['خصم', 'شحن مجاني', 'عرض مدة', 'هدية'];
  submit() { alert('تم إضافة العرض بنجاح!'); }
}
