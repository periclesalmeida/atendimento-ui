import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { MonitorRoutingModule } from './monitor-routing.module';
import { MonitorSelecionarServicoComponent } from './monitor-selecionar-servico/monitor-selecionar-servico.component';


@NgModule({
  declarations: [MonitorSelecionarServicoComponent],
  imports: [
    CommonModule,
    MonitorRoutingModule,
    PanelModule,
    ButtonModule
  ],
  entryComponents: [MonitorSelecionarServicoComponent]
})
export class MonitorModule { }
