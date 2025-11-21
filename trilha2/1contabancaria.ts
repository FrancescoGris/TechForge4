class ContaBancaria {
  titular: string;
  saldo: number = 0;

  constructor(titular: string) {
    this.titular = titular;
  }

  depositar(valor: number): void {
    this.saldo = this.saldo + valor;
  }

  sacar(valor: number): void {
    this.saldo = this.saldo - valor;
  }
}