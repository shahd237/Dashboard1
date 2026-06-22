import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBadge, StatusTone } from '../status-badge/status-badge';

export interface ColumnDef {
  key: string;
  header: string;
  type?: 'text' | 'badge' | 'avatar' | 'image';
  width?: string;
}

export interface RowAction {
  icon: 'edit' | 'delete' | 'view' | 'assign';
}

export interface RowActionEvent {
  icon: RowAction['icon'];
  row: Record<string, any>;
}

@Component({
  selector: 'app-data-table',
  imports: [CommonModule, StatusBadge],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
})
export class DataTable {
  @Input() columns: ColumnDef[] = [];
  @Input() rows: Record<string, any>[] = [];
  @Input() actions: RowAction['icon'][] = ['edit', 'delete'];
  @Output() actionClick = new EventEmitter<RowActionEvent>();

  badgeTone(value: string): StatusTone {
    const map: Record<string, StatusTone> = {
      'جديد': 'new',
      'مكتمل': 'completed',
      'قيد التنفيذ': 'inprogress',
      'مجدول': 'scheduled',
      'قيد الانتظار': 'pending',
      'مرفوض': 'rejected',
      'مفعل': 'active',
      'غير مفعل': 'inactive',
    };
    return map[value] ?? 'new';
  }
}
