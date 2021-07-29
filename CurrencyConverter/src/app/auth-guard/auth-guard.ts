import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //     let result = this.authService.isLoggedIn();
    //     if (result)
    //         return true;
    //     return this.router.createUrlTree(['/auth']);
    // }

    constructor(private router : Router, private authService: AuthService){}
}