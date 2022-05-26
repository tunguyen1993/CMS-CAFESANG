import {Component, OnInit} from '@angular/core';
import {
  NbLoginComponent
} from "@nebular/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent implements OnInit {
  showPassword = false;

  ngOnInit() {
    this.service.onTokenChange().subscribe((token) => {
      if (token.isValid()) {
        // this.router.navigate(['/dashboard']).then(); // Your redirection goes here
      }
    });
  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
