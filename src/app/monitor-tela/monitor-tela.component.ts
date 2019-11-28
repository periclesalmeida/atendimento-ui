import { transition, trigger, useAnimation, animation, animate, keyframes, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtendimentoService } from '../atendimento/atendimento.service';
import { Atendimento } from '../core/model';
import { flash } from '../core/util';

@Component({
  selector: 'app-monitor-tela',
  templateUrl: './monitor-tela.component.html',
  styleUrls: ['./monitor-tela.component.css'],
  animations: [
    trigger('flash', [transition('stateA => stateB', useAnimation(flash))])
  ],
})
export class MonitorTelaComponent implements OnInit {

  atendimentosApresentados: Array<Atendimento>;
  ultimoAtendimentoApresentado: Atendimento;
  proximoAtendimentoApresentado: Atendimento;
  private servicos: any;
  flash: any = 'stateA';

  constructor(private activatedRoute: ActivatedRoute,
    private atendimentoService: AtendimentoService) {
    this.servicos = this.activatedRoute.snapshot.params['servicos'];
  }

  ngOnInit() {
    this.carregarAtendimentos();
    setInterval(() => this.verificarSeExisteProximoAtendimentoIhApresentar(), 5000);
  }

  ngOnDestroy(): void {
    clearInterval();
  }

  private verificarSeExisteProximoAtendimentoIhApresentar() {
    if (this.proximoAtendimentoApresentado) {
      this.carregarAtendimentos();
      this.apresentarProximoAtendimento();
      this.turnOnAnimate();
      this.turnOffAnimate();
    }
  }

  private apresentarProximoAtendimento() {
    this.atendimentoService.apresentar(this.proximoAtendimentoApresentado).subscribe(
      retorno => {
        this.ultimoAtendimentoApresentado = retorno;
      }
    );
  } 

  private turnOnAnimate() {
    this.flash = 'stateB';
  }

  private turnOffAnimate() {
    setTimeout(() => {
      this.flash = 'stateA';
    }, 3000);
  }

  private carregarAtendimentos() {
    return this.atendimentoService.consultarMovimentacaoChamadaPorServicos(this.servicos).subscribe(
      retorno => {
        if (!this.ultimoAtendimentoApresentado) {
          this.ultimoAtendimentoApresentado = retorno.ultimoAtendimentoApresentado;
        }
        this.atendimentosApresentados = retorno.atendimentosApresentados.slice(0, 5);
        this.proximoAtendimentoApresentado = retorno.proximoAtendimentoApresentado;
      });
  }
}
