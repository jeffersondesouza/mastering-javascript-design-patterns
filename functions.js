var Westeros = Westeros || {};
Westeros.Structures = Westeros.Structures || {};
Westeros.Houses = Westeros.Houses || {};

var Castle = (function() {
  function Castle(name) {
    this.name = name;
  }

  Castle.prototype.Build = function() {
    console.log("Castle built: " + this.name);
  };

  return Castle;
})();

var Targarian = (function() {
  function Targarian(name, label) {
    this.name = name;
    this.label = label;
  }

  Targarian.prototype.War = function() {
    console.log(this.name + " says: " + this.label);
  };

  return Targarian;
})();

Westeros.Structures.Castle = Castle;
Westeros.Houses.Targarian = Targarian;

var winterfel = new Westeros.Structures.Castle("winterfel");
var targarian = new Westeros.Houses.Targarian("Targarian", "Fire and Blood");

winterfel.Build();

targarian.War();



