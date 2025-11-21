abstract class Funcionario {
  private nome: string;
  private salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  abstract calcularBonus(): number;

  getSalario(): number {
    return this.salario;
  }

  getNome(): string {
    return this.nome;
  }
}

class Gerente extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.10;
  }
}

class Operario extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.05;
  }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
  for (const func of funcionarios) {
    const bonus = func.calcularBonus();
    const salarioFinal = func.getSalario() + bonus;
    console.log(`${func.getNome()}: Salário final = ${salarioFinal}`);
  }
}

const funcionarios: Funcionario[] = [
  new Gerente("Ana", 5000),
  new Operario("João", 3000)
];
calcularSalarioComBonus(funcionarios);