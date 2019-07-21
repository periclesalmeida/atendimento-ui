import {Component, OnInit} from '@angular/core';
import {Permissao, Usuario} from '../../core/model';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertaService} from '../../shared/alerta/alerta.service';
import {ErrorHandlerService} from '../../shared/erro/error-handler.service';
import {MESAGE_SUCCESSFULLY} from '../../shared/constant/mesage.constants';
import {UsuarioService} from '../usuario.service';
import {PermissaoService} from '../../permissao/permissao.service';

@Component({
  selector: 'app-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.css']
})
export class UsuarioCadastrarComponent implements OnInit {

  entidade: Usuario;
  operacaoInserir: boolean;
  permissoes: Array<Permissao>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private usuarioService: UsuarioService,
              private permissaoService: PermissaoService,
              private alertaService: AlertaService,
              private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
    const sequencial = this.activatedRoute.snapshot.params['sequencial'];
    this.verificarSeInclusaoOuAlteracao(sequencial);
    this.carregarPermissoes();
  }

  salvar() {
    if (this.operacaoInserir) {
      this.inserir();
    } else {
      this.alterar();
    }
  }

  private carregarPermissoes() {
    return this.permissaoService.consultarTodos().subscribe(
      retorno => this.permissoes = retorno
    );
  }

  private alterar() {
    this.usuarioService.alterar(this.entidade).subscribe(resposta => {
      this.exibirAlertaDadosGravadosComSucesso();
      this.direcionarParaConsulta();
    }, error => this.errorHandlerService.handle(error));
  }

  private inserir() {
    this.usuarioService.inserir(this.entidade).subscribe(resposta => {
      this.exibirAlertaDadosGravadosComSucesso();
      this.direcionarParaConsulta();
    }, error => this.errorHandlerService.handle(error));
  }

  private exibirAlertaDadosGravadosComSucesso() {
    this.alertaService.exibirSucesso(MESAGE_SUCCESSFULLY);
  }

  private direcionarParaConsulta() {
    this.router.navigate(['/usuario']);
  }

  private verificarSeInclusaoOuAlteracao(sequencial) {
    if (sequencial) {
      this.operacaoInserir = false;
      this.usuarioService.consultarPorId(sequencial).subscribe(
        retorno => this.entidade = retorno
      );
    } else {
      this.operacaoInserir = true;
      this.entidade = new Usuario();
      this.entidade.ativo = true;
    }
  }

}
