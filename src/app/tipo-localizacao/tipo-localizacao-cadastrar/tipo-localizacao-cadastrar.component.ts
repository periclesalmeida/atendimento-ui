import {Component, OnInit} from '@angular/core';
import {TipoLocalizacao} from '../../shared/model';
import {ActivatedRoute, Router} from '@angular/router';
import {TipoLocalizacaoService} from '../tipo-localizacao.service';
import {AlertaService} from '../../shared/alerta/alerta.service';
import {ErrorHandlerService} from '../../shared/erro/error-handler.service';
import {MESAGE_SUCCESSFULLY} from '../../shared/constant/mesage.constants';

@Component({
  selector: 'app-tipo-localizacao-cadastrar',
  templateUrl: './tipo-localizacao-cadastrar.component.html',
  styleUrls: ['./tipo-localizacao-cadastrar.component.css']
})
export class TipoLocalizacaoCadastrarComponent implements OnInit {

  entidade: TipoLocalizacao;
  operacaoInserir: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private tipoLocalizacaoService: TipoLocalizacaoService,
              private alertaService: AlertaService,
              private errorHandlerService: ErrorHandlerService) {
  }

  ngOnInit() {
    const codigo = this.activatedRoute.snapshot.params['id'];
    this.operacaoInserir = true;
    this.entidade = new TipoLocalizacao();
    this.carregarEntidadeSeCodigoInformado(codigo);
  }

  salvar() {
    if (this.operacaoInserir) {
      this.inserir();
    } else {
      this.alterar();
    }
  }

  private alterar() {
    this.tipoLocalizacaoService.alterar(this.entidade).subscribe(resposta => {
      this.exibirAlertaDadosGravadosComSucesso();
      this.direcionarParaConsulta();
    });
  }

  private inserir() {
    this.tipoLocalizacaoService.inserir(this.entidade).subscribe(resposta => {
      this.exibirAlertaDadosGravadosComSucesso();
      this.direcionarParaConsulta();
    });
  }

  private exibirAlertaDadosGravadosComSucesso() {
    this.alertaService.exibirSucesso(MESAGE_SUCCESSFULLY);
  }

  private direcionarParaConsulta() {
    this.router.navigate(['/tipo-localizacao']);
  }

  private carregarEntidadeSeCodigoInformado(codigo) {
    if (codigo) {
      this.operacaoInserir = false;
      this.tipoLocalizacaoService.consultarPorId(codigo).subscribe(
        retorno => this.entidade = retorno
      );
    }
  }
}
