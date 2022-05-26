import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HTTP_INTERCEPTORS, HttpRequest} from "@angular/common/http";
import {NB_AUTH_TOKEN_INTERCEPTOR_FILTER, NbAuthJWTInterceptor} from "@nebular/auth";
import {environment} from "../environments/environment";
import {AuthModule} from "./auth/auth.module";
import {NbDatepickerModule, NbDialogModule} from "@nebular/theme";
import {ReactiveFormsModule} from "@angular/forms";

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
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
      useValue: function (req: HttpRequest<any>) {
        return req.url === environment.api_url + 'auth/refresh-token' || req.url === environment.api_url + "auth/login";
      },
    },
    {provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
