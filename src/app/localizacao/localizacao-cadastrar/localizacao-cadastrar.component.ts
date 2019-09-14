import {Component, OnInit} from '@angular/core';
import {Localizacao, Servico, TipoLocalizacao} from '../../core/model';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertaService} from '../../shared/alerta/alerta.service';
import {ErrorHandlerService} from '../../shared/erro/error-handler.service';
import {LocalizacaoService} from '../localizacao.service';
import {MESAGE_SUCCESSFULLY} from '../../shared/constant/mesage.constants';
import {TipoLocalizacaoService} from '../../tipo-localizacao/tipo-localizacao.service';
import {ServicoService} from '../../servico/servico.service';

@Component({
  selector: 'app-localizacao-cadastrar',
  templateUrl: './localizacao-cadastrar.component.html',
  styleUrls: ['./localizacao-cadastrar.component.css']
})
export class LocalizacaoCadastrarComponent implements OnInit {

  entidade: Localizacao;
  operacaoInserir: boolean;
  tipos: Array<TipoLocalizacao>;
  servicos: Array<Servico>;
  dialogServico: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private localizacaoService: LocalizacaoService,
              private tipoLocalizacaoService: TipoLocalizacaoService,
              private servicoService: ServicoService,
              private alertaService: AlertaService,
              private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
    const sequencial = this.activatedRoute.snapshot.params['id'];
    this.entidade = new Localizacao();
    this.verificarSeInclusaoOuAlteracao(sequencial);
    this.carregarTipos();
    this.carregarServicos();
  }

  salvar() {
    if (this.operacaoInserir) {
      this.inserir();
    } else {
      this.alterar();
    }
  }

  private carregarServicos() {
    this.servicoService.consultarTodos().subscribe(
      retorno => this.servicos = retorno
    );
  }

  private carregarTipos() {
    this.tipoLocalizacaoService.consultarTodos().subscribe(
      retorno => this.tipos = retorno
    );
  }

  private alterar() {
    this.localizacaoService.alterar(this.entidade).subscribe(resposta => {
      this.exibirAlertaDadosGravadosComSucesso();
      this.direcionarParaConsulta();
    }, error => this.errorHandlerService.handle(error));
  }

  private inserir() {
    this.localizacaoService.inserir(this.entidade).subscribe(resposta => {
      this.exibirAlertaDadosGravadosComSucesso();
      this.direcionarParaConsulta();
    }, error => this.errorHandlerService.handle(error));
  }

  private exibirAlertaDadosGravadosComSucesso() {
    this.alertaService.exibirSucesso(MESAGE_SUCCESSFULLY);
  }

  private direcionarParaConsulta() {
    this.router.navigate(['/localizacao']);
  }

  private verificarSeInclusaoOuAlteracao(sequencial) {
    if (sequencial) {
      this.operacaoInserir = false;
      this.localizacaoService.consultarPorId(sequencial).subscribe(
        retorno => this.entidade = retorno
      );
    } else {
      this.operacaoInserir = true;      
      this.entidade.ativo = true;
    }
  }

}
