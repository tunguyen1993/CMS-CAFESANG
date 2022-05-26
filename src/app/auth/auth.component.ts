import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbAuthService} from "@nebular/auth";
import {takeWhile} from "rxjs";

@Component({
  selector: 'auth-container',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./auth.component.scss']

})
export class AuthComponent implements OnDestroy {
  private alive = true;

  subscription: any;

  authenticated: boolean = false;
  token: string = '';

  // showcase of how to use the onAuthenticationChange method
  constructor(protected auth: NbAuthService) {
    this.subscription = auth.onAuthenticationChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe((authenticated: boolean) => {
        this.authenticated = authenticated;
      });
  }

  back() {
    return false;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
