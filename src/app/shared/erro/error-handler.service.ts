import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertaService } from '../alerta/alerta.service';
import { NotAuthenticatedError } from '../../seguranca/app-http.service';

@Injectable()
export class ErrorHandlerService {

  constructor(
    private messageService: MessageService,
    private router: Router,
    private alertaService: AlertaService
  ) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse instanceof NotAuthenticatedError) {
      msg = 'Sua sessão expirou!';
      this.router.navigate(['/login']);

    } else if (errorResponse instanceof HttpErrorResponse
        && errorResponse.status >= 400 && errorResponse.status <= 499) {
      msg = 'Ocorreu um erro ao processar a sua solicitação';

      if (errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar esta ação';
      }

      try {
        if ( typeof errorResponse.error === 'string') {
          msg = errorResponse.error;
        } else {
          msg = errorResponse.error[0].errorUser;
        }
      } catch (e) { }

      console.error('Ocorreu um erro', errorResponse);

    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);
    }

    this.alertaService.exibirErro(msg);
  }

}
