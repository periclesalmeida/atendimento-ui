import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertaService } from '../alerta/alerta.service';

@Injectable()
export class ErrorHandlerService {

  constructor(
    private router: Router,
    private alertaService: AlertaService
  ) { }

  handle(httpErrorResponse: any):String {
    let errorMessage = null;

    if (httpErrorResponse.status === 400) {
        errorMessage = httpErrorResponse.error.map(function (message) {
            return message.errorUser
        });
        this.alertaService.exibirErro(errorMessage.toString());
    } else {
        this.router.navigate(['/error-page']);
    }

    return errorMessage;
  }
}
