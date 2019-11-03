import {Component, OnInit} from '@angular/core';
import {ServicoService} from '../../servico/servico.service';
import {Atendimento, Servico} from '../../core/model';
import {AtendimentoService} from '../atendimento.service';

@Component({
  selector: 'app-atendimento-gerar',
  templateUrl: './atendimento-gerar.component.html',
  styleUrls: ['./atendimento-gerar.component.css']
})
export class AtendimentoGerarComponent implements OnInit {

  servicos: Array<Servico>;
  entidade: Atendimento;
  exibirDialog: boolean;

  constructor(private servicoService: ServicoService, private atendimentoService: AtendimentoService) { }

  ngOnInit() {
    this.carregarServico();
    this.exibirDialog = false;
  }

  gerar(servico: Servico) {
    this.atendimentoService.gerar(servico).subscribe(
      retorno => {
        this.entidade = retorno;
        this.exibirDialog = true;
      }
    );
  }

  gerarPrioridade(servico: Servico) {
    this.atendimentoService.gerarPrioridade(servico).subscribe(
      retorno => {
        this.entidade = retorno;
        this.exibirDialog = true;
      }
    );
  }

  private carregarServico() {
    return this.servicoService.consultarTodos().subscribe(
      retorno => this.servicos = retorno.content
    );
  }
}
