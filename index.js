var Westeros;
(function(Westeros) {
  Westeros.Houses = {};

  Westeros.Houses.Targaryen = function() {
    this.name = "Targaryen";
  };

  var Ruler = (function() {
    function Ruler() {
      this.house = new Westeros.Houses.Targaryen();
    }
    return Ruler;
  })();

  Westeros.Ruler = Ruler;
})(Westeros || (Westeros = {}));

console.log("Westeros:", Westeros);

Westeros.Houses.Targaryen = function() {
  this.name = null;
};

const r = new Westeros.Ruler();
console.log("r:", r.house.name);
