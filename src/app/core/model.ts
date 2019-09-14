export class Permissao {
  id: string;
  descricao: string;
}

export class Usuario {
  id: string;
  login: string;
  senhaSemRash: string;
  ativo: boolean;
  permissoes: Array<Permissao>;
}

export class TipoLocalizacao {
  id: string;
  descricao: string;
}

export class Servico {
  id: string;
  descricao: string;
  sigla: string;
  tipoCor: string;
  numeroAtendimentoAtual: number;
  tipoCorEnum: any;
  tipoCorHtml: any;
  ativo: boolean;
}

export class Localizacao {
  id: string;
  descricao: string;
  tipo: TipoLocalizacao;
  ativo: boolean;
  servicos: Array<Servico>;
}

export class Atendimento {
  id: string;
  numeroAtendimento: number;
  dataHoraCadastro: Date;
  dataHoraApresentacao: Date;
  dataHoraChamada: Date;
  localizacao: Localizacao;
  servico: Servico;
  usuario: Usuario;
  indicadorPrioridade: boolean;
  dataHoraCadastroFormatada: string;
  numeroAtendimentoFormatado: string;
  tempoDecorrido: string;
}
