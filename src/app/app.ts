import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatSidenavModule } from '@angular/material/sidenav';
import { map } from 'rxjs';
import { FooterComponent, HeaderComponent, SidenavComponent } from './shared';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    SidenavComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('EmployeeManagement');

  private readonly breakpointObserver = inject(BreakpointObserver);

  readonly isMobile = toSignal(
    this.breakpointObserver.observe('(max-width: 768px)').pipe(map((result) => result.matches)),
    { initialValue: false }
  );

  readonly opened = signal(true);
  readonly shouldOpen = computed(() => (this.isMobile() ? this.opened() : true));

  toggleSidenav() {
    if (this.isMobile()) {
      this.opened.update((value) => !value);
    }
  }

  closeSidenav() {
    if (this.isMobile()) {
      this.opened.set(false);
    }
  }
}
