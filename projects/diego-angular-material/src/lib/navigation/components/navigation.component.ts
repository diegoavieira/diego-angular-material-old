import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Navigation } from '../navigation';

@Component({
  selector: 'dam-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isMobile: boolean;
  opened: boolean;

  @Input() config: Navigation = {};

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe('(max-width: 599px)')
      .subscribe(breakpoint => {
        this.isMobile = breakpoint.matches;
        this.opened = !this.isMobile;
      });
  }

  ngOnInit() {
  }

  onToggleSidenav(): void {
    this.opened = !this.opened;
  }

  onCloseSidenavItem(): void {
    if (this.isMobile) {
      this.opened = !this.opened;
    }
  }

}
