import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ConfirmationService, MessageService } from 'primeng/primeng';
import { AppHttp } from '../seguranca/app-http.service';
import { AuthService } from '../seguranca/auth.service';
import { ErrorHandlerService } from '../shared/erro/error-handler.service';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ErrorHandlerService,
    AuthService,
    AppHttp,

    ConfirmationService,
    MessageService,
    JwtHelperService,
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  exports: [MessageComponent]
})
export class SharedModule { }
