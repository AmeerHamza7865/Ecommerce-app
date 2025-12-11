import { Component, inject, signal } from '@angular/core';
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
  isError = signal<boolean>(false);
  Message=signal<string|null>(null);
  authService=inject(AuthService);
  router=inject(Router);

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.email,Validators.required]), 
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  })

 

onSubmit() {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  this.isSubmitting = true;

  this.authService.loginService(this.loginForm.value as any).subscribe({
    next: (response:any) => {
      console.log('Login successful', response);
      this.authService.setToken(response.token); // Assuming the response contains a token
      this.isSubmitting = false;

      console.log('Stored Token:', this.authService.getToken());
      this.isError.set(false);
     
      // Navigate after success
      this.router.navigate(['/']);
    },
    error: (error) => {
      // console.error('Login failed', error);
      if(error.status === 401) {
        this.Message.set('Invalid email or password.');
      } else {
        this.Message.set('An error occurred. Please try again later.');
      }
      this.isError.set(true);
      this.isSubmitting = false;
    }
  });
}


   get f() {
    return this.loginForm.controls;
  }


}
