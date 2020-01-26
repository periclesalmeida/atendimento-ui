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
  servicos: any;
  flash: any = 'stateA';

  constructor(private activatedRoute: ActivatedRoute,
    private atendimentoService: AtendimentoService) {
    this.servicos = this.activatedRoute.snapshot.params['servicos'];
  }

  ngOnInit() {
    this.carregarAtendimentos();
    setInterval(() => this.verificarAtendimentosIhApresentarSeExistir(), 5000);
  }

  ngOnDestroy(): void {
    clearInterval();
  }

  private verificarAtendimentosIhApresentarSeExistir() {
    if (this.isAtendimentoDeveSerApresentado()) {
      console.log('ultimo='+this.ultimoAtendimentoApresentado.numeroAtendimentoFormatado);
      console.log('proximo='+this.proximoAtendimentoApresentado.numeroAtendimentoFormatado);
      this.apresentarProximoAtendimento();
      this.turnOnAnimate();
      this.turnOffAnimate();
    }
    this.carregarAtendimentos();
  }

  private isAtendimentoDeveSerApresentado() {
    return this.proximoAtendimentoApresentado &&
           (this.proximoAtendimentoApresentado.id != this.ultimoAtendimentoApresentado.id);
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
        this.atendimentosApresentados = retorno.atendimentosApresentados.slice(0,5);
        this.proximoAtendimentoApresentado = retorno.proximoAtendimentoApresentado;
      });
  }
}
