import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from '../../login/login.model';
import { getAdmin, getUser } from '../../login/login.reducers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  user: boolean = false;
  admin: boolean = false;
  constructor(private store: Store<Login>) {
    this.store.select(getAdmin).subscribe((admin) => (this.admin = admin));
    this.store.select(getUser).subscribe((user) => (this.user = user));
    console.log(this.user, this.admin);
  }
  showFiller = false;

  // logout() {
  //   localStorage.removeItem('userToken');

  //   this.router.navigate(['/login']);
  // }
}
