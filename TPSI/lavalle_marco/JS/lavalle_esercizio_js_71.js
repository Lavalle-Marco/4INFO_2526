class Poligono {
  constructor(nome, numLati, lunghezzaLato) {
    this.nome = nome;
    this.numLati = numLati;
    this.lunghezzaLato = lunghezzaLato;
  }

  calcolaPerimetro() {
    return this.numLati * this.lunghezzaLato;
  }

  calcolaArea() {
    const perimetro = this.calcolaPerimetro();
    const apotema = this.lunghezzaLato / (2 * Math.tan(Math.PI / this.numLati));
    return (perimetro * apotema) / 2;
  }

  stampaRisultati() {
    console.log(`${this.nome}`);
    console.log(`Perimetro: ${this.calcolaPerimetro().toFixed(2)}`);
    console.log(`Area: ${this.calcolaArea().toFixed(2)}\n`);
  }
}

class TriangoloEquilatero extends Poligono {
  constructor(lato) { super("Triangolo Equilatero", 3, lato); }
}

class Quadrato extends Poligono {
  constructor(lato) { super("Quadrato", 4, lato); }
}

class Pentagono extends Poligono {
  constructor(lato) { super("Pentagono", 5, lato); }
}

class Esagono extends Poligono {
  constructor(lato) { super("Esagono", 6, lato); }
}

class Ettagono extends Poligono {
  constructor(lato) { super("Ettagono", 7, lato); }
}

class Ottagono extends Poligono {
  constructor(lato) { super("Ottagono", 8, lato); }
}

const poligoni = [
  new TriangoloEquilatero(15),
  new Quadrato(10),
  new Pentagono(21),
  new Esagono(18),
  new Ettagono(9),
  new Ottagono(12)
];

poligoni.forEach(p => p.stampaRisultati());
