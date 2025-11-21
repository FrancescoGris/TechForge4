class Agenda {
  compromissos: string[] = [];

  adicionar(compromisso: string): void {
    this.compromissos.push(compromisso);
  }

  listar(): void {
    for (const c of this.compromissos) {
      console.log(c);
    }
  }
}