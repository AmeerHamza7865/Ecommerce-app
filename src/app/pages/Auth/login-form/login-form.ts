import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/Services/authServices/auth-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  isSubmitting = false;
  authService=inject(AuthService);
  router=inject(Router);

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]), 
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  })

  onSubmit(){
     if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    // Simulate login call
    setTimeout(() => {
      console.log('Login success', this.loginForm.value);
      this.isSubmitting = false;
      this.router.navigate(['/']);
    }, 1200);
  }
   get f() {
    return this.loginForm.controls;
  }


}
