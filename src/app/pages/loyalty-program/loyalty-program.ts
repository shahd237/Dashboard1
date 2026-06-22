import { Component } from '@angular/core';
import { PageToolbar, ToolbarFilter } from '../../shared/page-toolbar/page-toolbar';
import { DataTable, ColumnDef } from '../../shared/data-table/data-table';
import { Pagination } from '../../shared/pagination/pagination';

@Component({
  selector: 'app-loyalty-program',
  imports: [PageToolbar, DataTable, Pagination],
  templateUrl: './loyalty-program.html',
  styleUrl: './loyalty-program.scss',
})
export class LoyaltyProgram {
  filters: ToolbarFilter[] = [{ label: 'الفئة' }, { label: 'الحالة' }];

  columns: ColumnDef[] = [
    { key: 'client', header: 'العميل' },
    { key: 'points', header: 'النقاط المتراكمة' },
    { key: 'tier', header: 'مستوى الولاء' },
    { key: 'lastActivity', header: 'آخر نشاط' },
    { key: 'rewards', header: 'المكافآت المستبدلة' },
    { key: 'status', header: 'الحالة', type: 'badge' },
  ];

  rows = [
    { client: 'عمر الرشيدي', points: '4,850', tier: 'بلاتيني', lastActivity: '17 يونيو 2026', rewards: '3 مكافآت', status: 'مفعل' },
    { client: 'فيصل القحطاني', points: '3,200', tier: 'ذهبي', lastActivity: '16 يونيو 2026', rewards: '1 مكافأة', status: 'مفعل' },
    { client: 'أحمد سالم', points: '2,100', tier: 'فضي', lastActivity: '14 يونيو 2026', rewards: '2 مكافآت', status: 'مفعل' },
    { client: 'سارة محمد', points: '950', tier: 'برونزي', lastActivity: '10 يونيو 2026', rewards: '—', status: 'مفعل' },
    { client: 'هند الزهراني', points: '580', tier: 'برونزي', lastActivity: '5 يونيو 2026', rewards: '—', status: 'غير مفعل' },
    { client: 'نواف الدوسري', points: '1,750', tier: 'فضي', lastActivity: '12 يونيو 2026', rewards: '1 مكافأة', status: 'مفعل' },
  ];
}
