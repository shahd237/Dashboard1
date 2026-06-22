import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ToolbarFilter {
  label: string;
}

@Component({
  selector: 'app-page-toolbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './page-toolbar.html',
  styleUrl: './page-toolbar.scss',
})
export class PageToolbar {
  @Input() filters: ToolbarFilter[] = [];
  @Input() searchPlaceholder = 'البحث...';
  @Input() addLabel = '';
  @Output() addClicked = new EventEmitter<void>();

  searchTerm = '';
}
