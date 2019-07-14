import {Component, OnInit} from '@angular/core';
import {Servico} from '../../core/model';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertaService} from '../../shared/alerta/alerta.service';
import {ErrorHandlerService} from '../../shared/erro/error-handler.service';
import {ServicoService} from '../servico.service';
import {MESAGE_SUCCESSFULLY} from '../../shared/constant/mesage.constants';

@Component({
  selector: 'app-servico-cadastrar',
  templateUrl: './servico-cadastrar.component.html',
  styleUrls: ['./servico-cadastrar.component.css']
})
export class ServicoCadastrarComponent implements OnInit {

  entidade: Servico;
  operacaoInserir: boolean;
  cores: any[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private servicoService: ServicoService,
              private alertaService: AlertaService,
              private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
    const sequencial = this.activatedRoute.snapshot.params['sequencial'];
    this.carregarCores();
    this.verificarSeInclusaoOuAlteracao(sequencial);
  }

  salvar() {
    this.setarTipoCor();
    if (this.operacaoInserir) {
      this.inserir();
    } else {
      this.alterar();
    }
  }

  private setarTipoCor() {
    this.entidade.tipoCor = this.entidade.tipoCorEnum ? this.entidade.tipoCorEnum.value : '';
  }

  private carregarCores() {
    return this.servicoService.consultarTodasAsCores().subscribe(
      retorno => this.cores = retorno
    );
  }

  private alterar() {
    this.servicoService.alterar(this.entidade).subscribe(resposta => {
      this.exibirAlertaDadosGravadosComSucesso();
      this.direcionarParaConsulta();
    }, error => this.errorHandlerService.handle(error));
  }

  private inserir() {
    this.servicoService.inserir(this.entidade).subscribe(resposta => {
      this.exibirAlertaDadosGravadosComSucesso();
      this.direcionarParaConsulta();
    }, error => this.errorHandlerService.handle(error));
  }

  private exibirAlertaDadosGravadosComSucesso() {
    this.alertaService.exibirSucesso(MESAGE_SUCCESSFULLY);
  }

  private direcionarParaConsulta() {
    this.router.navigate(['/servico']);
  }

  private verificarSeInclusaoOuAlteracao(sequencial) {
    if (sequencial) {
      this.operacaoInserir = false;
      this.servicoService.consultarPorId(sequencial).subscribe(
        retorno => this.entidade = retorno
      );
    } else {
      this.operacaoInserir = true;
      this.entidade = new Servico();
      this.entidade.ativo = true;
    }
  }
}