import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

import { LoginComponent } from '../login/login.component';
import { AuthGuard } from './auth.guard';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { InputTextModule, ButtonModule, CaptchaModule } from 'primeng/primeng';
import { LogoutService } from './logout.service';
import { environment } from '../../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,
        blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    }),
    InputTextModule,
    ButtonModule,
    CaptchaModule,
    SegurancaRoutingModule
  ],
  providers: [
    AuthGuard,
    LogoutService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
     },
  ]
})
export class SegurancaModule { }
