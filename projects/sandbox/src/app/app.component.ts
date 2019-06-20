import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config = {
    title: 'Diego Angular Material',
    sidenav: [
      { path: '/dashboard', label: 'Dashboard' }
    ]
  };
}
