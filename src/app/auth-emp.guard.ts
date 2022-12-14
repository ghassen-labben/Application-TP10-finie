import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './components/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthEmpGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) { }
  canActivate() {
    let role = this.auth.role;
    if (role == "employe")
      return true;
    else {
      this.router.navigate(['/login']);
      return false
    }
  }


}
