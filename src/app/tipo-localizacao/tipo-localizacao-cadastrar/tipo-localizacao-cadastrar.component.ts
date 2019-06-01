import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-localizacao-cadastrar',
  templateUrl: './tipo-localizacao-cadastrar.component.html',
  styleUrls: ['./tipo-localizacao-cadastrar.component.css']
})
export class TipoLocalizacaoCadastrarComponent implements OnInit {

  entidade: any;

  constructor() { }

  ngOnInit() {
    this.entidade = {};
  }

}
