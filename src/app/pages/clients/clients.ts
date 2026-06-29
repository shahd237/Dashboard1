import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StatCard } from '../../components/stat-card/stat-card';
import { Pagination } from '../../shared/pagination/pagination';
import { Modal } from '../../shared/modal/modal';

interface Client {
  id: number;
  name: string;
  phone: string;
  email: string;
  orders: number;
  address: string;
  totalPaid: number;
  joined: string;
  status: 'مفعل' | 'غير مفعل';
  avatar?: string;
}

@Component({
  selector: 'app-clients',
  imports: [CommonModule, FormsModule, StatCard, Pagination, Modal],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class Clients {
  constructor(private router: Router) {}

  search = '';
  showModal = false;
  isEditing = false;
  showDeleteConfirm = false;
  deleteId: number | null = null;
  nextId = 9;
  form: Partial<Client> = {};

  stats = [
    { label: 'عملاء غير نشطين',value: '31',  sublabel: 'عرض الكل', icon: 'pending' },
    { label: 'عملاء هذا الشهر',value: '250',   sublabel: 'عرض الكل', icon: 'orders' },
    { label: 'عملاء نشطين' ,value: '980',   sublabel: 'عرض الكل', icon: 'completed' },
    { label: 'إجمالي العملاء',value: '1,250', sublabel: 'عرض الكل', icon: 'clients' },
  ];

  all: Client[] = [
    { id: 1, name: 'هيثم علي احمد', phone: '01226975483', email: 'ahmed@gmail.com', orders: 5, address: 'القاهرة-المعادي', totalPaid: 3250, joined: '10-5-2026', status: 'مفعل' },
    { id: 2, name: 'هيثم علي احمد', phone: '01226975483', email: 'ahmed@gmail.com', orders: 5, address: 'القاهرة-المعادي', totalPaid: 3250, joined: '10-5-2026', status: 'مفعل' },
    { id: 3, name: 'هيثم علي احمد', phone: '01226975483', email: 'ahmed@gmail.com', orders: 5, address: 'القاهرة-المعادي', totalPaid: 3250, joined: '10-5-2026', status: 'مفعل' },
    { id: 4, name: 'هيثم علي احمد', phone: '01226975483', email: 'ahmed@gmail.com', orders: 5, address: 'القاهرة-المعادي', totalPaid: 3250, joined: '10-5-2026', status: 'مفعل' },
    { id: 5, name: 'هيثم علي احمد', phone: '01226975483', email: 'ahmed@gmail.com', orders: 5, address: 'القاهرة-المعادي', totalPaid: 3250, joined: '10-5-2026', status: 'مفعل' },
    { id: 6, name: 'هيثم علي احمد', phone: '01226975483', email: 'ahmed@gmail.com', orders: 5, address: 'القاهرة-المعادي', totalPaid: 3250, joined: '10-5-2026', status: 'مفعل' },
    { id: 7, name: 'هيثم علي احمد', phone: '01226975483', email: 'ahmed@gmail.com', orders: 5, address: 'القاهرة-المعادي', totalPaid: 3250, joined: '10-5-2026', status: 'مفعل' },
    { id: 8, name: 'هيثم علي احمد', phone: '01226975483', email: 'ahmed@gmail.com', orders: 5, address: 'القاهرة-المعادي', totalPaid: 3250, joined: '10-5-2026', status: 'مفعل' },
  ];

  get filtered(): Client[] {
    const q = this.search.toLowerCase().trim();
    if (!q) return this.all;
    return this.all.filter(c =>
      c.name.includes(q) ||
      c.phone.includes(q) ||
      c.email.toLowerCase().includes(q)
    );
  }

  openAdd(): void {
    this.isEditing = false;
    this.form = {
      status: 'مفعل',
      orders: 0,
      totalPaid: 0,
      joined: new Date().toLocaleDateString('ar-EG'),
    };
    this.showModal = true;
  }

  openEdit(c: Client): void {
    this.isEditing = true;
    this.form = { ...c };
    this.showModal = true;
  }

  openDetail(id: number): void {
    this.router.navigate(['/clients', id]);
  }

  save(): void {
    if (!this.form.name || !this.form.phone) return;
    if (this.isEditing) {
      const i = this.all.findIndex(c => c.id === this.form.id);
      if (i > -1) this.all[i] = { ...this.all[i], ...this.form } as Client;
    } else {
      this.all.push({ ...this.form, id: this.nextId++ } as Client);
    }
    this.showModal = false;
  }

  confirmDelete(id: number): void {
    this.deleteId = id;
    this.showDeleteConfirm = true;
  }

  doDelete(): void {
    this.all = this.all.filter(c => c.id !== this.deleteId);
    this.showDeleteConfirm = false;
  }
}