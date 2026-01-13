import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./core/Services/authServices/auth-service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log('AuthGuard Running', this.auth.getToken());
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
      console.log('inside AuthGuard Running', this.auth.getToken());
      return false;
    }
    return true;
  }
}
