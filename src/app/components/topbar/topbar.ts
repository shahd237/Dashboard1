import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar implements OnInit, OnDestroy {
  pageTitle = 'الرئيسية';
  private sub?: Subscription;

  get userName(): string { return this.auth.currentUser?.name ?? 'مستخدم'; }

  constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {
    this.updateTitle();
    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.updateTitle());
  }
  ngOnDestroy(): void { this.sub?.unsubscribe(); }

  private updateTitle(): void {
    let child = this.route.root;
    while (child.firstChild) child = child.firstChild;
    this.pageTitle = child.snapshot.data['title'] ?? 'الرئيسية';
  }
}
