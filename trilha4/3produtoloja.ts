interface ProdutoLoja {
  codigo: number;
  nome: string;
}

class Loja {
  produtos: ProdutoLoja[] = [];

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find(produto => produto.codigo === codigo);
  }
}