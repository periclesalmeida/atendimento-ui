import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { AtendimentoGerarComponent } from './atendimento-gerar/atendimento-gerar.component';
import {PanelModule} from 'primeng/panel';
import {FormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { AtendimentoAtenderComponent } from './atendimento-atender/atendimento-atender.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [AtendimentoGerarComponent, AtendimentoAtenderComponent],
  imports: [
    CommonModule,
    AtendimentoRoutingModule,
    PanelModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    CardModule,
    TableModule
  ],
  entryComponents: [AtendimentoGerarComponent, AtendimentoAtenderComponent]
})
export class AtendimentoModule { }
