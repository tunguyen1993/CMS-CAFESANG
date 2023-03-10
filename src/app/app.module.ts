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
  NbDialogModule, NbIconModule, NbLayoutModule, NbMenuModule,
  NbSidebarModule,
  NbThemeModule, NbToastrModule
} from "@nebular/theme";
import {ReactiveFormsModule} from "@angular/forms";
import {CurrencyPipe} from "@angular/common";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {NgxPaginationModule} from "ngx-pagination";

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
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbMenuModule,
    NbLayoutModule,
    NbToastrModule.forRoot(),
    NgxPaginationModule
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
