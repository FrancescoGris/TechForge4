class Pagamento {
  processar(): void {
    console.log("Processando pagamento");
  }
}

class PagamentoCartao extends Pagamento {
  numeroCartao: string;

  constructor(numeroCartao: string) {
    super();
    this.numeroCartao = numeroCartao;
  }

  processar(): void {
    if (this.numeroCartao.length !== 16) {
      console.log("Número de cartão inválido");
      return;
    }
    console.log("Pagamento com cartão processado");
  }
}

class PagamentoBoleto extends Pagamento {
  processar(): void {
    const codigoBoleto = "1234567890";
    console.log(`Boleto gerado com código: ${codigoBoleto}`);
  }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
  for (const pagamento of pagamentos) {
    pagamento.processar();
  }
}

const pagamentos: Pagamento[] = [
  new PagamentoCartao("1234567890123456"),
  new PagamentoCartao("123"),
  new PagamentoBoleto()
];
processarPagamentos(pagamentos);