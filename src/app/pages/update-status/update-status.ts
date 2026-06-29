import { Component } from '@angular/core';

@Component({
  selector: 'app-update-status',
  imports: [],
  templateUrl: './update-status.html',
  styleUrl: './update-status.scss',
})
export class UpdateStatus {

  orderHeader = {
    date: '20/5/2026',
    time: '10:30 ص',
    status: 'تم مراجعة الطلب',
    customer: 'محمد احمد',
    device: 'Iphone 13'
  };

  trackingStats = {
    departureTime: '09:42 ص',
    estimatedArrival: '18 دقيقة',
    remainingDistance: '5.6 كم'
  };

  deliveryData = {
    technician: 'محمد احمد',
    vehicleType: 'دراجة نارية',
    vehicleNumber: 'ق ط ر 9854',
    phone: '0122258836'
  };

  updateStatus = {
    status: 'تم مراجعة الطلب',
    orderId: '#1235',
    serviceType: 'استلام جهاز بواسطة المندوب',
    orderDate: '20 يونيو 2026 - 10:30 ص'
  };

  orderSteps = [
    { label: 'تم إنشاء الطلب', completed: true, current: false },
    { label: 'تم مراجعة الطلب', completed: true, current: true },
    { label: 'تم إرسال المندوب', completed: false, current: false },
    { label: 'المندوب في الطريق إليك', completed: false, current: false },
    { label: 'تم استلام الجهاز', completed: false, current: false },
    { label: 'وصل الجهاز الى مركز الصيانة', completed: false, current: false },
    { label: 'جاري فحص الجهاز', completed: false, current: false },
    { label: 'جاري الإصلاح', completed: false, current: false },
    { label: 'في الطريق إليك', completed: false, current: false },
    { label: 'تم التسليم', completed: false, current: false }
  ];
}
