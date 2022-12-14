import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string = "";

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  onSubmit() {
    if (this.loginForm.value) {
      if (this.auth.login(this.loginForm.value.login, this.loginForm.value.password) == "employe") {
        localStorage.setItem('role', "emp");
        this.router.navigateByUrl('emp');
      } else if (this.auth.login(this.loginForm.value.login, this.loginForm.value.password) == "directeur") {
        localStorage.setItem('role', "dir");

        this.router.navigateByUrl('dir');

      }
      else
        this.message = "eruur";
    }
  }
}
