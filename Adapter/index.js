var Embarcacao = (function() {
  var Embarcacao = function(peso) {
    this.anguloEsq = 0;
    this.anguloDir = 0;
    this.anguloVela = 0;
    this.velocidade = 0;
    this.aberturaDaVela = 0;
    this.coeficienteDeRolagem = 0;
    this.peso = peso || 1000;
  };

  Embarcacao.prototype.setAnguloDoLeme = function(dir, esq) {
    this.dir = dir;
    this.esq = esq;
  };

  Embarcacao.prototype.setConfiguracaoDaVela = function(aberturaPercent) {
    const percent = aberturaPercent > 100 ? 100 : aberturaPercent;
    this.velocidade = percent * 1000 * 0.25 * this.coeficienteDeRolagem;
  };

  Embarcacao.prototype.rolagem = function(coef) {
    this.coeficienteDeRolagem = coef + 0.86;
  };

  Embarcacao.prototype.setAnguloDavela = function(angulo) {
    this.anguloVela = angulo;
  };

  return Embarcacao;
})();

// Supondo que queremos um barco mais simples, podemos fazer  uma Adaptador

var BarcoSimples = (function() {
  var BarcoSimples = function(peso) {
    this._embarcacao = new Embarcacao(peso);
  };

  BarcoSimples.prototype.girarParaDireira = function() {
    this._embarcacao.setAnguloDoLeme(90, 0);
    this._embarcacao.setAnguloDavela(90);
  };

  BarcoSimples.prototype.girarParaEsquerda = function() {
    this._embarcacao.setAnguloDoLeme(0, 90);
    this._embarcacao.setAnguloDavela(180);
  };

  BarcoSimples.prototype.acelerar = function() {
    this._embarcacao.rolagem(8.3)
    this._embarcacao.setConfiguracaoDaVela(100);
  };

  BarcoSimples.prototype.velocidade = function() {
    return this._embarcacao.velocidade;
  };

  return BarcoSimples;
})();

const barcoSimples = new BarcoSimples(100);

barcoSimples.girarParaDireira(100)
barcoSimples.acelerar(100)
console.log(barcoSimples);
console.log(barcoSimples.velocidade());
