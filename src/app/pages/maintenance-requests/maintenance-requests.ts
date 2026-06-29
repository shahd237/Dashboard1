import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Pagination } from '../../shared/pagination/pagination';
import { StatusBadge, StatusTone } from '../../shared/status-badge/status-badge';
import { Modal } from '../../shared/modal/modal';
import { Router } from '@angular/router';

interface Request {
  id: string;
  client: string;
  device: string;
  technician: string;
  date: string;
  price: string;
  status: string;
  man: string;
  type: string;
}

@Component({
  selector: 'app-maintenance-requests',
  imports: [CommonModule, FormsModule, RouterLink, Pagination, StatusBadge, Modal],
  templateUrl: './maintenance-requests.html',
  styleUrl: './maintenance-requests.scss',
})
export class MaintenanceRequests {
  constructor(private router: Router) {}
  search = '';
  filterStatus = 'الكل';
  showModal = false;
  isEditing = false;
  showDeleteConfirm = false;
  deleteId: string | null = null;
  form: Partial<Request> = {};
  statuses = ['جديد', 'قيد التنفيذ', 'مكتمل', 'مجدول', 'قيد الانتظار', 'مرفوض'];
  technicians = ['محمود يوسف', 'خالد عمر', 'عبدالله ناصر', 'عمر الرشيدي'];

  all: Request[] = [
    {
      id: '4582',
      client: 'أحمد سالم',
      device: '01098540717',
      technician: 'مندوب',
      type: 'iphone 14',
      price: 'بانتظار الفحص',
      status: 'شهد',
      man: 'محمود يوسف',
      date: '3-5-2026',
    },
    {
      id: '4581',
      client: 'سارة محمد',
      device: '01098540717',
      technician: 'فني منازل',
      type: 'iphone 14',
      price: 'تحت الفحص',
      status: '-',
      man: '-',
      date: '10-2-2026',
    },
    {
      id: '4580',
      client: 'منى الشريف',
      device: '01098540717',
      technician: 'مندوب',
      type: 'iphone 14',
      price: 'تم فحصها',
      status: '-',
      man: '-',
      date: '10-2-2026',
    },
    {
      id: '4579',
      client: 'فيصل القحطاني',
      device: '01098540717',
      technician: 'مندوب',
      type: 'iphone 14',
      price: 'تم فحصها',
      status: '-',
      man: '-',
      date: '10-2-2026',
    },
    {
      id: '4578',
      client: 'ريم العتيبي',
      device: '01098540717',
      technician: 'مندوب',
      type: 'iphone 14',
      price: 'تم فحصها',
      status: '-',
      man: '-',
      date: '10-2-2026',
    },
    {
      id: '4577',
      client: 'نواف الدوسري',
      device: '01098540717',
      technician: 'مندوب',
      type: 'iphone 14',
      price: 'تم فحصها',
      status: '-',
      man: '-',
      date: '10-2-2026',
    },
    {
      id: '4576',
      client: 'هند الزهراني',
      device: '01098540717',
      technician: 'مندوب',
      type: 'iphone 14',
      price: 'تم فحصها',
      status: '-',
      man: '-',
      date: '10-2-2026',
    },
    {
      id: '4575',
      client: 'تركي العنزي',
      device: '01098540717',
      technician: 'مندوب',
      type: 'iphone 14',
      price: 'تم فحصها',
      status: '-',
      man: 'عمر الرشيدي',
      date: '10-2-2026',
    },
  ];

  get filtered(): Request[] {
    const q = this.search.toLowerCase();
    return this.all.filter((r) => {
      if (this.filterStatus !== 'الكل' && r.status !== this.filterStatus) return false;
      if (q && !r.client.includes(q) && !r.id.includes(q) && !r.device.toLowerCase().includes(q))
        return false;
      return true;
    });
  }

  openAdd(): void {
    this.isEditing = false;
    this.form = { status: 'جديد', date: new Date().toLocaleDateString('ar-SA') };
    this.showModal = true;
  }
  openEdit(r: Request): void {
    this.router.navigate(['/maintenance-requests', r.id, 'edit']);
  }

  save(): void {
    if (!this.form.client || !this.form.device) return;
    if (this.isEditing) {
      const i = this.all.findIndex((r) => r.id === this.form.id);
      if (i > -1) this.all[i] = { ...this.all[i], ...this.form } as Request;
    } else {
      const newId = String(Number(this.all[0]?.id ?? '4000') + 1);
      this.all.unshift({ ...this.form, id: newId } as Request);
    }
    this.showModal = false;
  }

  confirmDelete(id: string): void {
    this.deleteId = id;
    this.showDeleteConfirm = true;
  }
  doDelete(): void {
    this.all = this.all.filter((r) => r.id !== this.deleteId);
    this.showDeleteConfirm = false;
  }

  badgeTone(status: string): StatusTone {
    const map: Record<string, StatusTone> = {
      جديد: 'new',
      مكتمل: 'completed',
      'قيد التنفيذ': 'inprogress',
      مجدول: 'scheduled',
      'قيد الانتظار': 'pending',
      مرفوض: 'rejected',
    };
    return map[status] ?? 'new';
  }

  searchQuery: string = '';
  fromDate: string = '';
  toDate: string = '';
  selectedCategory: string = '';
  selectedStatus: string = '';

  onSearch(): void {
    console.log('Search Query:', this.searchQuery);
    // Emit search event or call API
    this.applyFilters();
  }

  onDateChange(): void {
    console.log('Date Range:', {
      from: this.fromDate,
      to: this.toDate,
    });
    this.applyFilters();
  }

  onCategoryChange(): void {
    console.log('Selected Category:', this.selectedCategory);
    this.applyFilters();
  }

  onStatusChange(): void {
    console.log('Selected Status:', this.selectedStatus);
    this.applyFilters();
  }

  applyFilters(): void {
    const filters = {
      search: this.searchQuery,
      fromDate: this.fromDate,
      toDate: this.toDate,
      category: this.selectedCategory,
      status: this.selectedStatus,
    };
    console.log('Applied Filters:', filters);
    // Emit filters to parent component or call API
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.fromDate = '';
    this.toDate = '';
    this.selectedCategory = '';
    this.selectedStatus = '';
    console.log('Filters cleared');
  }
}
