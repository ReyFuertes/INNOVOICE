import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class UserGuard implements CanActivate {
  constructor(private router: Router) {  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //use distributor for now, change when user role is clear
    //this.router.navigateByUrl('/dashboard/distributor');
    return true;
  }
}