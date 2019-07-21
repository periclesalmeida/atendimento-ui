export class TipoLocalizacao {
  codigo: number;
  descricao: string;
}

export class Servico {
 sequencial: number;
 descricao: string;
 sigla: string;
 tipoCor: string;
 numeroAtendimentoAtual: number;
 tipoCorEnum: any;
 ativo: boolean;
}

export class Localizacao {
  sequencial:number;
  descricao: string;
  tipo: TipoLocalizacao;
  ativo: boolean
  servicos: Array<Servico>;
}
