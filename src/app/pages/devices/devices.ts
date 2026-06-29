import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Pagination } from '../../shared/pagination/pagination';
import { Modal } from '../../shared/modal/modal';

export interface Device {
  id: number; brand: string; model: string; storage: string;
  color: string; colorHex: string; price: number; rating: number;
  orders: number; status: 'مفعل' | 'غير مفعل';
}

@Component({
  selector: 'app-devices',
  imports: [CommonModule, FormsModule, Pagination, Modal],
  templateUrl: './devices.html',
  styleUrl: './devices.scss',
})
export class Devices {
  constructor(private router: Router) {}
  search = '';
  filterBrand = 'الكل';
  filterStatus = 'الكل';
  showModal = false;
  isEditing = false;
  showDeleteConfirm = false;
  deleteId: number | null = null;
  nextId = 8;
  form: Partial<Device> = {};

  brands = ['الكل','Apple','Apple','Apple','Apple'];
  storageOptions = ['64GB','128GB','256GB','512GB','1TB'];
  colors = [{ name: 'أسود', hex: '#3a3a3c' },{ name: 'أزرق', hex: '#2e4ec0' },{ name: 'رمادي', hex: '#8e8e93' },{ name: 'أبيض', hex: '#e5e5ea' },{ name: 'وردي', hex: '#ff6b9d' },{ name: 'أخضر', hex: '#34c759' }];

  all: Device[] = [
    { id: 1, brand: 'Apple', model: 'iPhone 15 Pro', storage: '256GB', color: 'أسود تيتانيوم', colorHex: '#3a3a3c', price: 5499, rating: 4.8, orders: 34, status: 'مفعل' },
    { id: 2, brand: 'Apple', model: 'iiPhone 15 Pro', storage: '128GB', color: 'أزرق', colorHex: '#2e4ec0', price: 3799, rating: 4.6, orders: 21, status: 'مفعل' },
    { id: 3, brand: 'Apple', model: 'iPhone 15 Pro', storage: '512GB', color: 'رمادي', colorHex: '#8e8e93', price: 5999, rating: 4.7, orders: 18, status: 'مفعل' },
    { id: 4, brand: 'Apple', model: 'iPhone 15 Pro', storage: '256GB', color: 'أبيض', colorHex: '#e5e5ea', price: 1899, rating: 4.2, orders: 12, status: 'مفعل' },
    { id: 5, brand: 'Apple', model: 'iPhone 15 Pro', storage: '128GB', color: 'وردي', colorHex: '#ff6b9d', price: 2999, rating: 4.4, orders: 9, status: 'غير مفعل' },
    { id: 6, brand: 'Apple', model: 'iPhone 15 Pro', storage: '256GB', color: 'أخضر', colorHex: '#34c759', price: 3299, rating: 4.1, orders: 6, status: 'مفعل' },
    { id: 7, brand: 'Apple', model: 'iPhone 15 Pro', storage: '256GB', color: 'أخضر فاتح', colorHex: '#a8e6cf', price: 3499, rating: 4.5, orders: 15, status: 'مفعل' },
  ];

  get filtered(): Device[] {
    const q = this.search.toLowerCase();
    return this.all.filter(d => {
      if (this.filterBrand !== 'الكل' && d.brand !== this.filterBrand) return false;
      if (this.filterStatus !== 'الكل' && d.status !== this.filterStatus) return false;
      if (q && !d.model.toLowerCase().includes(q) && !d.brand.toLowerCase().includes(q)) return false;
      return true;
    });
  }

  openAdd(): void { this.isEditing = false; this.form = { status: 'مفعل', rating: 4.5, orders: 0, colorHex: '#3a3a3c', storage: '128GB', brand: 'Apple' }; this.showModal = true; }
  openEdit(d: Device): void { this.isEditing = true; this.form = { ...d }; this.showModal = true; }
  openDetail(id: number): void { this.router.navigate(['/devices', id]); }

  save(): void {
    if (!this.form.brand || !this.form.model) return;
    if (this.isEditing) {
      const i = this.all.findIndex(d => d.id === this.form.id);
      if (i > -1) this.all[i] = { ...this.all[i], ...this.form } as Device;
    } else {
      this.all.push({ ...this.form, id: this.nextId++ } as Device);
    }
    this.showModal = false;
  }

  confirmDelete(id: number): void { this.deleteId = id; this.showDeleteConfirm = true; }
  doDelete(): void { this.all = this.all.filter(d => d.id !== this.deleteId); this.showDeleteConfirm = false; }
  toggleStatus(d: Device): void { d.status = d.status === 'مفعل' ? 'غير مفعل' : 'مفعل'; }
}
