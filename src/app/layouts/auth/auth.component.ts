import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Login } from '../../login/login.model';
import { setLogin } from '../../login/login.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  loginForm: FormGroup;

  email: string;
  password: string;
  auth: string;
  selectValue: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<Login>
  ) {
    this.email = '';
    this.password = '';
    this.auth = '';
    this.selectValue = '';

    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
        ],
      ],
      password: ['', [Validators.required]],
      auth: ['', [Validators.required]],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.store.dispatch(
        setLogin({
          payload: {
            user: this.selectValue === 'user',
            admin: this.selectValue === 'admin',
          },
        })
      );
      this.router.navigate(['/dashboard']);
    }
  }
}
