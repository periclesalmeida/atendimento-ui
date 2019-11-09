import { Component, OnInit } from '@angular/core';
import { Atendimento, Localizacao } from '../../core/model';
import { LocalizacaoService } from '../../localizacao/localizacao.service';
import { AtendimentoService } from '../atendimento.service';


@Component({
  selector: 'app-atendimento-atender',
  templateUrl: './atendimento-atender.component.html',
  styleUrls: ['./atendimento-atender.component.css']
})
export class AtendimentoAtenderComponent implements OnInit {

  localizacao: Localizacao;
  localizacoes: Array<Localizacao>;
  entidade: Atendimento;
  atendimentosEmEspera: Array<Atendimento>;
  atendimentosRealizados: Array<Atendimento>;

  constructor(private localizacaoService: LocalizacaoService,
              private atendimentoService: AtendimentoService) {
  }

  ngOnInit() {
    this.carregarLocalizacao();
  }

  ngOnDestroy(): void {
    this.limpar();
  }
  
  selecionarLocalizacao(localizacao: Localizacao) {
    this.localizacao = localizacao;
    this.carregarMovimentacaoAtendimentos();
    this.carregarMovimentacaoEmIntervalosDeCincoSegundos();
  }

  alterarLocalizacao() {
    this.limpar();
  }

  chamarProximo() {
    this.atendimentoService.chamarProximo(this.localizacao).subscribe(
      retorno => {
        this.setarEntidade(retorno);
      }
    );
  }

 chamarNovamenteAtendimentoAnterior() {
    this.chamarNovamente(this.entidade);
  }

  chamarNovamente(atendimento: Atendimento) {
    this.atendimentoService.chamarNovamente(atendimento, this.localizacao).subscribe(
      retorno => {
        this.setarEntidade(retorno);
      }
    );
    this.carregarMovimentacaoAtendimentos();
  }

  private carregarMovimentacaoEmIntervalosDeCincoSegundos() {
    setInterval(() => this.carregarMovimentacaoAtendimentos(), 5000);
  }

  private cancelarCarregamentoDeMovimentacao() {
    clearInterval();
  }

  private setarEntidade(retorno) {
    this.carregarMovimentacaoAtendimentos();
    this.entidade = retorno;
  }

  private limpar() {
    this.entidade = null;
    this.localizacao = null;
    this.cancelarCarregamentoDeMovimentacao();
  }

  private carregarMovimentacaoAtendimentos() {

    if (this.localizacao) {
      let servicosIds = this.localizacao.servicos.map(function (servico) {
        return servico.id
      });
  
      return this.atendimentoService.consutlarMovimentacaoPorLocalizacao(servicosIds).subscribe(
        retorno => {
          this.atendimentosEmEspera = retorno.atendimentosEmEspera;
          this.atendimentosRealizados = retorno.atendimentosRealizados;
        }
      );
    }
  }

  private carregarLocalizacao() {
    return this.localizacaoService.consultarTodos().subscribe(
      retorno => this.localizacoes = retorno.content
    );
  }

}
