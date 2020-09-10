import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { HardCodedAuthService } from './hard-coded-auth.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  constructor(private hardCodedAuthService: HardCodedAuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardCodedAuthService.isUserLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;

    }
  }
}
