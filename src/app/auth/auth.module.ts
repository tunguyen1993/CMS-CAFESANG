import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "./login/login.component";
import {
  NbAuthJWTToken,
  NbAuthModule,
  NbLoginComponent,
  NbLogoutComponent, NbPasswordAuthStrategy,
  NbRegisterComponent,
  NbRequestPasswordComponent, NbResetPasswordComponent,
  routes
} from "@nebular/auth";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule, NbFocusMonitor, NbFormFieldModule, NbIconModule,
  NbInputModule,
  NbLayoutModule, NbMenuModule, NbSidebarModule, NbStatusService, NbThemeModule, NbThemeService
} from "@nebular/theme";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {environment} from "../../environments/environment";
import {AuthComponent} from "./auth.component";

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    HttpClientModule,
    NbLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    AuthRoutingModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
          },
          baseEndpoint: environment.api_url,
          login: {
            endpoint: 'auth/login',
            method: 'post',
            redirect: {
              success: '/dashboard',
              failure: null, // stay on the same page
            },
          },
          logout: {
            endpoint: 'auth/logout',
            method: 'get',
          },
        }),
      ],
      forms: {
        logout: {
          redirectDelay: 0,
          strategy: 'email',
        },
        login: {
          redirectDelay: 100, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'email',  // strategy id key.
          rememberMe: true,   // whether to show or not the `rememberMe` checkbox
          showMessages: {     // show/not show success/error messages
            success: true,
            error: true,
          },
        },
      },
    }),
    FormsModule,
    NbCheckboxModule,
    NbButtonModule,
    NbInputModule,
    NbAlertModule,
    NbFormFieldModule,
    NbIconModule,
  ],
  providers: [
    NbFocusMonitor,
    NbStatusService,
  ]

})
export class AuthModule { }
