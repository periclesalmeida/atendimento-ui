import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtendimentoService } from '../atendimento/atendimento.service';
import { Atendimento } from '../core/model';

@Component({
  selector: 'app-monitor-tela',
  templateUrl: './monitor-tela.component.html',
  styleUrls: ['./monitor-tela.component.css']
})
export class MonitorTelaComponent implements OnInit {

  atendimentosApresentados: Array<Atendimento>;
  ultimoAtendimentoApresentado: Atendimento;
  proximoAtendimentoApresentado: Atendimento;
  private servicos: any;

  constructor(private activatedRoute: ActivatedRoute,
    private atendimentoService: AtendimentoService) {

    this.servicos = this.activatedRoute.snapshot.params['servicos'];
  }

  ngOnInit() {
    this.carregarAtendimentos();
  }

  private carregarAtendimentos() {
    return this.atendimentoService.consultarMovimentacaoChamadaPorServicos(this.servicos).subscribe(
      retorno => {
        // TODO Ajustas os atendimentos esperados
        this.atendimentosApresentados = retorno.atendimentosNaoApresentados;
        this.ultimoAtendimentoApresentado = retorno.proximoAtendimentoApresentado;
        this.proximoAtendimentoApresentado = retorno.proximoAtendimentoApresentado;
      });
  }

}
