import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StatCard } from '../../components/stat-card/stat-card';
import { Pagination } from '../../shared/pagination/pagination';
import { Modal } from '../../shared/modal/modal';
import { StatusBadge } from '../../shared/status-badge/status-badge';

interface Client { id: number; name: string; phone: string; email: string; orders: number; joined: string; status: 'مفعل' | 'غير مفعل'; }

@Component({
  selector: 'app-clients',
  imports: [CommonModule, FormsModule, StatCard, Pagination, Modal, StatusBadge],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class Clients {
  constructor(private router: Router) {}
  search = ''; showModal = false; isEditing = false;
  showDeleteConfirm = false; deleteId: number | null = null; nextId = 7;
  form: Partial<Client> = {};

  all: Client[] = [
    { id: 1, name: 'أحمد سالم', phone: '0555123456', email: 'ahmed@mail.com', orders: 12, joined: '2024-02-10', status: 'مفعل' },
    { id: 2, name: 'سارة محمد', phone: '0555987654', email: 'sara@mail.com', orders: 7, joined: '2024-05-21', status: 'مفعل' },
    { id: 3, name: 'منى الشريف', phone: '0555334455', email: 'mona@mail.com', orders: 3, joined: '2025-01-09', status: 'غير مفعل' },
    { id: 4, name: 'فيصل القحطاني', phone: '0555778899', email: 'faisal@mail.com', orders: 21, joined: '2023-11-30', status: 'مفعل' },
    { id: 5, name: 'ريم العتيبي', phone: '0555112233', email: 'reem@mail.com', orders: 5, joined: '2025-03-15', status: 'مفعل' },
    { id: 6, name: 'نواف الدوسري', phone: '0555445566', email: 'nawaf@mail.com', orders: 9, joined: '2024-08-02', status: 'غير مفعل' },
  ];

  stats = [
    { value: '1,205', label: 'إجمالي العملاء', sublabel: 'منذ البداية', icon: 'clients' },
    { value: '980', label: 'عملاء نشطون', sublabel: 'هذا الشهر', icon: 'completed' },
    { value: '205', label: 'عملاء جدد', sublabel: 'هذا الشهر', icon: 'orders' },
    { value: '24', label: 'غير نشطين', sublabel: 'هذا الشهر', icon: 'pending' },
  ];

  get filtered(): Client[] {
    const q = this.search.toLowerCase();
    return this.all.filter(c => !q || c.name.includes(q) || c.phone.includes(q) || c.email.toLowerCase().includes(q));
  }

  openAdd(): void { this.isEditing = false; this.form = { status: 'مفعل', orders: 0, joined: new Date().toISOString().split('T')[0] }; this.showModal = true; }
  openEdit(c: Client): void { this.isEditing = true; this.form = { ...c }; this.showModal = true; }
  openDetail(id: number): void { this.router.navigate(['/clients', id]); }

  save(): void {
    if (!this.form.name || !this.form.phone) return;
    if (this.isEditing) { const i = this.all.findIndex(c => c.id === this.form.id); if (i > -1) this.all[i] = { ...this.all[i], ...this.form } as Client; }
    else { this.all.push({ ...this.form, id: this.nextId++ } as Client); }
    this.showModal = false;
  }

  confirmDelete(id: number): void { this.deleteId = id; this.showDeleteConfirm = true; }
  doDelete(): void { this.all = this.all.filter(c => c.id !== this.deleteId); this.showDeleteConfirm = false; }
}
