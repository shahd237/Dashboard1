import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface NotificationForm {
  title: string;
  type: string;
  client: string;
  receiver: string;
  message: string;
}

@Component({
  selector: 'app-notificatioform',
  imports: [FormsModule],
  templateUrl: './notificatioform.html',
  styleUrl: './notificatioform.scss',
})
export class Notificatioform {
   form: NotificationForm = {
    title: '',
    type: 'maintenance',
    client: '',
    receiver: 'single',
    message: '',
  };

  sendNotification(): void {
    console.log('Notification sent:', this.form);
  }

  cancel(): void {
    this.form = {
      title: '',
      type: 'maintenance',
      client: '',
      receiver: 'single',
      message: '',
    };
  }
}
