var Westeros = Westeros || {};
Westeros.Structures = Westeros.Structures || {};

var Castle = (function() {
  function Castle(name) {
    this.name = name;
  }

  Castle.prototype.Build = function() {
    console.log("Castle built: " + this.name);
  };

  return Castle;
})();

Westeros.Structures.Castle = Castle;

var winterfel = new Westeros.Structures.Castle("winterfel");

winterfel.Build();
