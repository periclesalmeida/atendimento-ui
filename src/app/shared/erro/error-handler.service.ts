import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertaService } from '../alerta/alerta.service';

@Injectable()
export class ErrorHandlerService {

  constructor(private router: Router, private alertaService: AlertaService) { }

  handle(httpErrorResponse: any) {
    if (httpErrorResponse.status === 400) {
      this.alertaService.exibirErro(this.returnErrorMessage(httpErrorResponse));
    } else {
      this.router.navigate(['/error-page']);
    }
  }

  returnErrorMessage(httpErrorResponse) {
    let errorMessage = null;
    if (httpErrorResponse.error.error === 'invalid_grant') {
      errorMessage = 'Usuário ou senha inválida!';
    } else {
      errorMessage = httpErrorResponse.error.map(function (message) {
        return message.errorUser
      });
    }
    return errorMessage;
  }
}
