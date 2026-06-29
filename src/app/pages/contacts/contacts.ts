import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type TicketStatus = 'new' | 'open' | 'closed' | 'waiting';
type TicketTab = 'all' | 'unread' | 'open' | 'closed';

interface Ticket {
  id: number;
  name: string;
  message: string;
  time: string;
  avatar: string;
  status: TicketStatus;
  statusLabel: string;
  unread: boolean;
}

interface ChatMessage {
  id: number;
  from: 'client' | 'agent';
  text: string;
  time: string;
}

@Component({
  selector: 'app-contacts',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts {
   searchTerm = '';
  activeTab: TicketTab = 'all';
  draftMessage = '';

  tabs = [
    { key: 'all' as TicketTab, label: 'الكل', count: 24 },
    { key: 'unread' as TicketTab, label: 'غير مقروء', count: 5 },
    { key: 'open' as TicketTab, label: 'مفتوح', count: 5 },
    { key: 'closed' as TicketTab, label: 'مغلق', count: 7 },
  ];

  tickets: Ticket[] = [
    {
      id: 1,
      name: 'محمد احمد',
      message: 'هل متوفر اللون الأسود؟',
      time: 'منذ 5 دقائق',
      avatar: 'assets/image/5218ca0b31cbc70c9a16103e017751be2da14f4c.jpg',
      status: 'new',
      statusLabel: 'جديدة',
      unread: true,
    },
    {
      id: 2,
      name: 'محمد احمد',
      message: 'هل متوفر اللون الأسود؟',
      time: 'منذ 5 دقائق',
      avatar: 'assets/image/5218ca0b31cbc70c9a16103e017751be2da14f4c.jpg',
      status: 'open',
      statusLabel: 'مفتوحة',
      unread: false,
    },
    {
      id: 3,
      name: 'محمد احمد',
      message: 'هل متوفر اللون الأسود؟',
      time: 'منذ 5 دقائق',
      avatar: 'assets/image/5218ca0b31cbc70c9a16103e017751be2da14f4c.jpg',
      status: 'closed',
      statusLabel: 'مغلقة',
      unread: false,
    },
    {
      id: 4,
      name: 'محمد احمد',
      message: 'هل متوفر اللون الأسود؟',
      time: 'منذ 5 دقائق',
      avatar: 'assets/image/5218ca0b31cbc70c9a16103e017751be2da14f4c.jpg',
      status: 'waiting',
      statusLabel: 'بانتظار رد العميل',
      unread: false,
    },
    {
      id: 5,
      name: 'محمد احمد',
      message: 'هل متوفر اللون الأسود؟',
      time: 'منذ 5 دقائق',
      avatar: 'assets/image/5218ca0b31cbc70c9a16103e017751be2da14f4c.jpg',
      status: 'closed',
      statusLabel: 'مغلقة',
      unread: false,
    },
  ];

  selectedTicket: Ticket = this.tickets[0];

  messages: ChatMessage[] = [
    {
      id: 1,
      from: 'client',
      text: 'السلام عليكم عندي مشكلة في تتبع طلبي',
      time: '10:30 ص',
    },
    {
      id: 2,
      from: 'agent',
      text: 'اهلا بك، من فضلك ارسل رقم الطلب وسأساعدك فوراً',
      time: '10:30 ص',
    },
    {
      id: 3,
      from: 'client',
      text: '#12548',
      time: '10:31 ص',
    },
    {
      id: 4,
      from: 'agent',
      text: 'شكراً لك، جاري التحقق من حالة الطلب',
      time: '10:30 ص',
    },
    {
      id: 5,
      from: 'agent',
      text: 'طلبك حالياً قيد التنفيذ وسيتم الانتهاء منه خلال 24 ساعة وسنقوم بإشعارك فور تجهيزه',
      time: '10:30 ص',
    },
    {
      id: 6,
      from: 'client',
      text: 'شكراً',
      time: '10:37 ص',
    },
  ];

  get filteredTickets(): Ticket[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.tickets.filter((ticket) => {
      const matchesSearch =
        !term ||
        ticket.name.toLowerCase().includes(term) ||
        ticket.message.toLowerCase().includes(term);

      const matchesTab =
        this.activeTab === 'all' ||
        (this.activeTab === 'unread' && ticket.unread) ||
        (this.activeTab === 'open' && ticket.status === 'open') ||
        (this.activeTab === 'closed' && ticket.status === 'closed');

      return matchesSearch && matchesTab;
    });
  }

  setTab(tab: TicketTab): void {
    this.activeTab = tab;
  }

  selectTicket(ticket: Ticket): void {
    this.selectedTicket = ticket;
  }

  sendMessage(): void {
    const text = this.draftMessage.trim();

    if (!text) {
      return;
    }

    this.messages.push({
      id: Date.now(),
      from: 'agent',
      text,
      time: 'الآن',
    });

    this.draftMessage = '';
  }
}
