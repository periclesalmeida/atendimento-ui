import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoLocalizacaoRoutingModule } from './tipo-localizacao-routing.module';
import { TipoLocalizacaoComponent } from './tipo-localizacao.component';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/primeng';

@NgModule({
  declarations: [TipoLocalizacaoComponent],
  imports: [
    CommonModule,
    TipoLocalizacaoRoutingModule,
    TableModule,
    PanelModule,
    ButtonModule,
    MenubarModule,
    ToolbarModule
  ]
})
export class TipoLocalizacaoModule { }
