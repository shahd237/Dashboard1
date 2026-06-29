import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-edit-maintance',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-maintance.html',
  styleUrls: ['./edit-maintance.scss'],
})
export class EditMaintance {
    // Mock data based on the UI screenshot
    constructor(private router: Router) {}
  orderData = {
    orderNumber: '#12548',
    customerName: 'محمد أحمد',
    phoneNumber: '0122258836',
    phoneType: 'iPhone 13',
    phoneModel: 'iPhone 13',
    discoveredProblem: 'تلف في شاشة',
    problemDescription: 'تلف في شاشة'
  };

  inspectionResult = {
    discoveredProblem: 'تغيير شاشة',
    estimatedCost: 800,
    repairDuration: 'يومين',
    repairLocation: 'inside', // 'inside' or 'home'
    receiptMethod: '',
    technician: 'أحمد علي',
    deviceType: 'iPhone 13',
    receiptDate: '15 يونيو - 5 مساءً',
    receiptAddress: 'شارع صلاح سالم، أمام مستشفى الجامعة، بني سويف',
    paymentMethod: 'كاش عند الاستلام',
    totalCost: '600 جنية'
  };

  onSave() {
    console.log('Saving inspection result:', this.inspectionResult);
    alert('تم تحديث حالة الطلب بنجاح!');
    this.router.navigate(['/maintenance-requests']);
  }

  onCancel() {
    console.log('Action cancelled');
    this.router.navigate(['/maintenance-requests']);
  }

  onUpdateStatus() {
    console.log('Updating status...');
    this.router.navigate(['/update-status']);
    
  }

  goBack() {
    this.router.navigate(['/maintenance-requests']);
  }
}
