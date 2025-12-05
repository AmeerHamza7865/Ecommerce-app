import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/AuthModel/loginModel';
import { SignupModel } from '../models/AuthModel/signupModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http:HttpClient) { }

  loginService(loginData: LoginModel):Observable<LoginModel>{
    var url="https://localhost:7125/api/Auth/login";
    return this.http.post<LoginModel>(url, loginData);
  }

  signupService(signupData: SignupModel):Observable<SignupModel>{
    var url="https://localhost:7125/api/Auth/signup";
    return this.http.post<SignupModel>(url, signupData);
  }

}
