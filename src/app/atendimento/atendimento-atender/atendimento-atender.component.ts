import { Component, OnInit } from '@angular/core';
import {LocalizacaoService} from '../../localizacao/localizacao.service';
import {Atendimento, Localizacao} from '../../core/model';
import {AtendimentoService} from '../atendimento.service';

@Component({
  selector: 'app-atendimento-atender',
  templateUrl: './atendimento-atender.component.html',
  styleUrls: ['./atendimento-atender.component.css']
})
export class AtendimentoAtenderComponent implements OnInit {

  localizacao: Localizacao;
  localizacoes: Array<Localizacao>;
  atendimentosEmEspera: Array<Atendimento>;
  atendimentosRealizados: Array<Atendimento>;

  constructor(private localizacaoService: LocalizacaoService,
              private atendimentoService: AtendimentoService) { }

  ngOnInit() {
    this.carregarLocalizacao();
  }

  selecionarLocalizacao(localizacao: Localizacao) {
    this.localizacao = localizacao;
    this.carregarMovimentacaoAtendimentos();
  }

  alterarLocalizacao() {
    this.localizacao = null;
  }

  private carregarMovimentacaoAtendimentos() {
    return this.atendimentoService.consutlarMovimentacaoPorLocalizacao(this.localizacao).subscribe(
      retorno => {
        this.atendimentosEmEspera = retorno.atendimentosEmEspera;
        this.atendimentosRealizados = retorno.atendimentosRealizados;
      }
    );
  }

  private carregarLocalizacao() {
    return this.localizacaoService.consultarTodos().subscribe(
      retorno => this.localizacoes = retorno
    );
  }

}
