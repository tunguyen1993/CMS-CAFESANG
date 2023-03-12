import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HTTP_INTERCEPTORS, HttpRequest} from "@angular/common/http";
import {
  NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
  NbAuthJWTInterceptor, NbAuthJWTToken,
  NbAuthModule,
  NbPasswordAuthStrategy
} from "@nebular/auth";
import {environment} from "../environments/environment";
import {AuthModule} from "./auth/auth.module";
import {
  NB_TIME_PICKER_CONFIG,
  NbDatepickerModule,
  NbDialogModule, NbDialogRef, NbIconModule, NbLayoutModule, NbMenuModule,
  NbSidebarModule,
  NbThemeModule, NbToastrModule
} from "@nebular/theme";
import {ReactiveFormsModule} from "@angular/forms";
import {CurrencyPipe} from "@angular/common";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {NgxPaginationModule} from "ngx-pagination";
import {PageService} from "./dashboard/page/page.service";
import {SettingsService} from "./dashboard/settings/settings.service";
import {AccountsService} from "./dashboard/accounts/accounts.service";
import {PostService} from "./dashboard/manager-posts/post.service";
import {AuthGuard} from "./auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot({
      autoFocus: true,
      closeOnBackdropClick: false,
      closeOnEsc: false,
    }),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthJWTToken,
          },
          baseEndpoint: environment.api_url,
          login: {
            endpoint: '/auth/login',
            method: 'post',
            redirect: {
              success: '/dashboard',
              failure: null, // stay on the same page
            },
          },
          logout: {
            endpoint: '/auth/logout',
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
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbMenuModule,
    NbLayoutModule,
    NbToastrModule.forRoot(),
    NgxPaginationModule,
    NbDialogModule.forRoot(),
  ],
  providers: [
    CurrencyPipe,
    {
      provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
      useValue: function (req: HttpRequest<any>) {
        return req.url === environment.api_url + '/auth/refresh-token' || req.url === environment.api_url + "/auth/login";
      },
    },
    {provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true},
    {
      provide:NB_TIME_PICKER_CONFIG,
      useValue:{}
    },
    PageService,
    SettingsService,
    AccountsService,
    PostService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
