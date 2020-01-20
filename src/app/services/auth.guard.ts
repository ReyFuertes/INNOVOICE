import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/app.reducer';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) { }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.store.pipe(
    //   select(roleSelector),
    //   debounceTime(1000),
    //   tap(isAdmin => {
    //     return isAdmin;
    //   })
    // );
    return true;
  }
}
