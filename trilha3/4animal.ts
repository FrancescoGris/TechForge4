class Animal {
  private energia: number = 50;

  comer(): void {
    this.energia += 10;
  }

  statusEnergia(): void {
    console.log(`Energia: ${this.energia}`);
  }
}

class Leao extends Animal {
  comer(): void {
    super.statusEnergia();
    console.log("Leão caçando: gasta energia");
    super.comer();
    super.comer();
  }
}

class Passaro extends Animal {
  comer(): void {
    super.comer();
  }
}

const leao = new Leao();
const passaro = new Passaro();
leao.comer();
leao.statusEnergia();
passaro.comer();
passaro.statusEnergia();