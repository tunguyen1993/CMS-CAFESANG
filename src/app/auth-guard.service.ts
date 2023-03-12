import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {NbAuthService, NbTokenStorage} from '@nebular/auth';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: NbAuthService, private router: Router, private tokenService : NbTokenStorage) {
    }

    canActivate() {
        return this.authService.isAuthenticated()
            .pipe(
                tap(authenticated => {
                    // this.authService.getToken().subscribe(data => {
                    //     let payload = data.getPayload();
                    //     if (!payload) {
                    //         this.tokenService.clear()
                    //         this.router.navigate(['']).then(r => r);
                    //     }
                    // })
                    if (!authenticated) {
                        this.tokenService.clear()
                        this.router.navigate(['']).then(r => r);
                    }
                }),
            );
    }
}