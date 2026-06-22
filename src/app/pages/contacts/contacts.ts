import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Conversation { id: number; name: string; lastMsg: string; time: string; unread?: number; active?: boolean; }
interface Message { text: string; from: 'admin' | 'client'; time: string; }

@Component({
  selector: 'app-contacts',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts {
  newMessage = '';
  activeId = 1;

  conversations: Conversation[] = [
    { id: 1, name: 'شهد هاشم', lastMsg: 'شكراً جزيلاً على الخدمة', time: 'الآن', unread: 2, active: true },
    { id: 2, name: 'أحمد سالم', lastMsg: 'متى سيصل الفني؟', time: '5 د' },
    { id: 3, name: 'سارة محمد', lastMsg: 'هل تم إغلاق الطلب؟', time: '12 د' },
    { id: 4, name: 'فيصل القحطاني', lastMsg: 'تمام شكراً', time: '32 د' },
    { id: 5, name: 'ريم العتيبي', lastMsg: 'أريد تعديل الموعد', time: '1 س' },
  ];

  messages: Record<number, Message[]> = {
    1: [
      { text: 'مرحباً، كيف يمكنني مساعدتك؟', from: 'admin', time: '9:00' },
      { text: 'أريد الاستفسار عن طلب الصيانة رقم #4582', from: 'client', time: '9:02' },
      { text: 'تفضل، الطلب قيد المعالجة وسيتم التواصل معك خلال ساعتين', from: 'admin', time: '9:03' },
      { text: 'شكراً جزيلاً على الخدمة', from: 'client', time: '9:05' },
    ],
    2: [
      { text: 'أهلاً بك، متى ترغب في إرسال الفني؟', from: 'admin', time: '10:00' },
      { text: 'متى سيصل الفني؟', from: 'client', time: '10:05' },
    ],
    3: [{ text: 'هل تم إغلاق الطلب؟', from: 'client', time: '11:00' }],
    4: [{ text: 'تمام شكراً', from: 'client', time: '12:00' }],
    5: [{ text: 'أريد تعديل الموعد', from: 'client', time: '13:00' }],
  };

  get activeMessages(): Message[] { return this.messages[this.activeId] || []; }
  get activeConversation(): Conversation | undefined { return this.conversations.find(c => c.id === this.activeId); }

  selectConversation(id: number): void {
    this.activeId = id;
    this.conversations = this.conversations.map(c => ({ ...c, active: c.id === id, unread: c.id === id ? 0 : c.unread }));
  }

  send(): void {
    if (!this.newMessage.trim()) return;
    if (!this.messages[this.activeId]) this.messages[this.activeId] = [];
    this.messages[this.activeId].push({ text: this.newMessage.trim(), from: 'admin', time: 'الآن' });
    this.newMessage = '';
  }
}
