import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, UrlSegment, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  loggedIN = false
  constructor(
    private authService: AuthService,
    private router : Router
    ) {
      this.authService.loggedIn.subscribe((res:boolean)=>{
        if(res === true){
        this.loggedIN = true
        }else{
          this.loggedIN = false
        }
      });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
     if(this.loggedIN){
       return true
     }else{
      this.router.navigate(['/home'])
       return false
     }
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return true
  }

}
