import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  @Input() title = '';
  @Input() visible = false;
  @Output() closed = new EventEmitter<void>();
  close() { this.closed.emit(); }
}
