import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  user: boolean;
  admin: boolean;
  constructor() {
    this.user = true;
    this.admin = false;
  }
  showFiller = false;
}
