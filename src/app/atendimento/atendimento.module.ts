import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { AtendimentoGerarComponent } from './atendimento-gerar/atendimento-gerar.component';

@NgModule({
  declarations: [AtendimentoGerarComponent],
  imports: [
    CommonModule,
    AtendimentoRoutingModule
  ],
  entryComponents: [AtendimentoGerarComponent]
})
export class AtendimentoModule { }
