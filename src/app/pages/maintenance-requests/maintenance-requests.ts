import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Pagination } from '../../shared/pagination/pagination';
import { StatusBadge, StatusTone } from '../../shared/status-badge/status-badge';
import { Modal } from '../../shared/modal/modal';

interface Request { id: string; client: string; device: string; technician: string; date: string; price: string; status: string; }

@Component({
  selector: 'app-maintenance-requests',
  imports: [CommonModule, FormsModule, RouterLink, Pagination, StatusBadge, Modal],
  templateUrl: './maintenance-requests.html',
  styleUrl: './maintenance-requests.scss',
})
export class MaintenanceRequests {
  search = ''; filterStatus = 'الكل';
  showModal = false; isEditing = false;
  showDeleteConfirm = false; deleteId: string | null = null;
  form: Partial<Request> = {};
  statuses = ['جديد','قيد التنفيذ','مكتمل','مجدول','قيد الانتظار','مرفوض'];
  technicians = ['محمود يوسف','خالد عمر','عبدالله ناصر','عمر الرشيدي'];

  all: Request[] = [
    { id: '4582', client: 'أحمد سالم', device: 'iPhone 14 Pro', technician: 'محمود يوسف', date: '12 يونيو 2026', price: '350 ر.س', status: 'جديد' },
    { id: '4581', client: 'سارة محمد', device: 'Samsung S23', technician: 'خالد عمر', date: '11 يونيو 2026', price: '210 ر.س', status: 'قيد التنفيذ' },
    { id: '4580', client: 'منى الشريف', device: 'iPad Air', technician: 'محمود يوسف', date: '10 يونيو 2026', price: '180 ر.س', status: 'مكتمل' },
    { id: '4579', client: 'فيصل القحطاني', device: 'MacBook Pro', technician: 'عبدالله ناصر', date: '9 يونيو 2026', price: '620 ر.س', status: 'مجدول' },
    { id: '4578', client: 'ريم العتيبي', device: 'iPhone 13', technician: 'خالد عمر', date: '8 يونيو 2026', price: '275 ر.س', status: 'قيد الانتظار' },
    { id: '4577', client: 'نواف الدوسري', device: 'Samsung Tab S8', technician: 'محمود يوسف', date: '7 يونيو 2026', price: '195 ر.س', status: 'مكتمل' },
    { id: '4576', client: 'هند الزهراني', device: 'iPhone 12', technician: 'عبدالله ناصر', date: '6 يونيو 2026', price: '230 ر.س', status: 'مرفوض' },
    { id: '4575', client: 'تركي العنزي', device: 'iPhone 15', technician: 'خالد عمر', date: '5 يونيو 2026', price: '410 ر.س', status: 'مكتمل' },
  ];

  get filtered(): Request[] {
    const q = this.search.toLowerCase();
    return this.all.filter(r => {
      if (this.filterStatus !== 'الكل' && r.status !== this.filterStatus) return false;
      if (q && !r.client.includes(q) && !r.id.includes(q) && !r.device.toLowerCase().includes(q)) return false;
      return true;
    });
  }

  openAdd(): void { this.isEditing = false; this.form = { status: 'جديد', date: new Date().toLocaleDateString('ar-SA') }; this.showModal = true; }
  openEdit(r: Request): void { this.isEditing = true; this.form = { ...r }; this.showModal = true; }

  save(): void {
    if (!this.form.client || !this.form.device) return;
    if (this.isEditing) { const i = this.all.findIndex(r => r.id === this.form.id); if (i > -1) this.all[i] = { ...this.all[i], ...this.form } as Request; }
    else { const newId = String(Number(this.all[0]?.id ?? '4000') + 1); this.all.unshift({ ...this.form, id: newId } as Request); }
    this.showModal = false;
  }

  confirmDelete(id: string): void { this.deleteId = id; this.showDeleteConfirm = true; }
  doDelete(): void { this.all = this.all.filter(r => r.id !== this.deleteId); this.showDeleteConfirm = false; }

  badgeTone(status: string): StatusTone {
    const map: Record<string, StatusTone> = { 'جديد': 'new', 'مكتمل': 'completed', 'قيد التنفيذ': 'inprogress', 'مجدول': 'scheduled', 'قيد الانتظار': 'pending', 'مرفوض': 'rejected' };
    return map[status] ?? 'new';
  }
}
