import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from '../footer/footer';
import { HeaderComponent } from '../header/header';
import { SidenavComponent } from '../sidenav/sidenav';
import { map } from 'rxjs';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    SidenavComponent,
    FooterComponent
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.scss'
})
export class ShellComponent {
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