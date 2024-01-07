import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Location';
  isInAdminRoute: boolean = false;
  constructor(private router: Router) {
    // Observer pour les changements de route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isInAdminRoute = event.url.includes('/admin');
      }
    });
  }
}
