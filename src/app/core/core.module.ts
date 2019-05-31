import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppHttp} from '../seguranca/app-http.service';
import {AuthService} from '../seguranca/auth.service';
import {ErrorHandlerService} from '../shared/erro/error-handler.service';
import {ConfirmationService, MessageService} from 'primeng/primeng';
import {JwtHelperService} from '@auth0/angular-jwt';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    ErrorHandlerService,
    AuthService,
    AppHttp,

    ConfirmationService,
    MessageService,
    JwtHelperService,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
