import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/servico/servico.service';
import { Servico } from 'src/app/core/model';

@Component({
  selector: 'app-monitor-selecionar-servico',
  templateUrl: './monitor-selecionar-servico.component.html',
  styleUrls: ['./monitor-selecionar-servico.component.css']
})
export class MonitorSelecionarServicoComponent implements OnInit {

  servicos: Array<Servico>;
  servicosSelecionados: Array<Servico>;

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
    this.carregarServico();
    this.servicosSelecionados = new Array();
  }

  selecionarServico(servico: Servico) {
    this.servicosSelecionados.push(servico);
    console.log(this.servicosSelecionados);
  }

  removerServico(servico: Servico) {
    this.servicosSelecionados.forEach((item, index) => {
      if (item.id === servico.id) { this.servicosSelecionados.splice(index, 1); }
    });
  }

  limparTudo() {
    this.servicosSelecionados = new Array();
  }

  isServicoSelecionado(servico: Servico) {
    var result = this.servicosSelecionados.some(item => item.id === servico.id);
    return result;
  }

  private carregarServico() {
    return this.servicoService.consultarTodos().subscribe(
      retorno => this.servicos = retorno.content
    );
  }
}
