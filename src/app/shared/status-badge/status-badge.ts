import { Component, Input } from '@angular/core';

export type StatusTone = 'new' | 'completed' | 'inprogress' | 'scheduled' | 'pending' | 'rejected' | 'active' | 'inactive';

@Component({
  selector: 'app-status-badge',
  imports: [],
  templateUrl: './status-badge.html',
  styleUrl: './status-badge.scss',
})
export class StatusBadge {
  @Input() label = '';
  @Input() tone: StatusTone = 'new';
}
