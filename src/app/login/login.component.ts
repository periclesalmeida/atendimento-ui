import { Component, OnInit } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../shared/erro/error-handler.service';
import { AlertaService } from '../shared/alerta/alerta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  captcha: boolean;

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private alertaService: AlertaService
  ) { }

  ngOnInit() {
    this.captcha = true;
  }

  validarCaptchar(evento) {
    this.captcha = false;
  }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(erro => {
        this.errorHandler.handle(erro);
      });
  }
}
