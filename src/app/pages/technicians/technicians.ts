import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pagination } from '../../shared/pagination/pagination';
import { Modal } from '../../shared/modal/modal';

export interface Technician {
  id: number; name: string; phone: string; specialty: string;
  orders: number; rating: number; joined: string; active: boolean;
}

@Component({
  selector: 'app-technicians',
  imports: [CommonModule, FormsModule, Pagination, Modal],
  templateUrl: './technicians.html',
  styleUrl: './technicians.scss',
})
export class Technicians {
  search = '';
  showModal = false;
  isEditing = false;
  modalTitle = '';
  deleteId: number | null = null;
  showDeleteConfirm = false;
  nextId = 7;

  form: Partial<Technician> = {};

  all: Technician[] = [
    { id: 1, name: 'محمود يوسف', phone: '0551234567', specialty: 'صيانة أجهزة Apple', orders: 142, rating: 4.8, joined: '2023-01-15', active: true },
    { id: 2, name: 'خالد عمر', phone: '0559876543', specialty: 'صيانة Samsung', orders: 98, rating: 4.5, joined: '2023-06-20', active: true },
    { id: 3, name: 'عبدالله ناصر', phone: '0554567890', specialty: 'صيانة Laptops', orders: 76, rating: 4.2, joined: '2023-09-10', active: false },
    { id: 4, name: 'عمر الرشيدي', phone: '0557891234', specialty: 'صيانة شاملة', orders: 210, rating: 4.9, joined: '2022-11-05', active: true },
    { id: 5, name: 'يوسف المطيري', phone: '0553214567', specialty: 'صيانة Apple', orders: 61, rating: 4.0, joined: '2024-02-28', active: true },
    { id: 6, name: 'سعد البقمي', phone: '0556543210', specialty: 'صيانة Samsung', orders: 33, rating: 3.8, joined: '2024-05-01', active: false },
  ];
  specialties = ['صيانة أجهزة Apple', 'صيانة Samsung', 'صيانة Laptops', 'صيانة شاملة', 'صيانة Huawei'];

  get filtered(): Technician[] {
    const q = this.search.toLowerCase();
    return this.all.filter(t =>
      !q || t.name.includes(q) || t.phone.includes(q) || t.specialty.toLowerCase().includes(q)
    );
  }

  openAdd(): void { this.isEditing = false; this.modalTitle = 'إضافة فني جديد'; this.form = { active: true, rating: 4.5, orders: 0, joined: new Date().toISOString().split('T')[0] }; this.showModal = true; }
  openEdit(t: Technician): void { this.isEditing = true; this.modalTitle = 'تعديل بيانات الفني'; this.form = { ...t }; this.showModal = true; }

  save(): void {
    if (!this.form.name || !this.form.phone) return;
    if (this.isEditing) {
      const idx = this.all.findIndex(t => t.id === this.form.id);
      if (idx > -1) this.all[idx] = { ...this.all[idx], ...this.form } as Technician;
    } else {
      this.all.push({ ...this.form, id: this.nextId++ } as Technician);
    }
    this.showModal = false;
  }

  confirmDelete(id: number): void { this.deleteId = id; this.showDeleteConfirm = true; }
  doDelete(): void { this.all = this.all.filter(t => t.id !== this.deleteId); this.showDeleteConfirm = false; }
  toggleActive(t: Technician): void { t.active = !t.active; }
}
