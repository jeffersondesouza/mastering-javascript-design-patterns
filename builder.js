const Castle = function(name) {
  this.name = name;
};

Castle.prototype.build = function() {
  console.log("Nome do castelo é: ", this.name);
};

const c1 = new Castle("Castelo 1");
const c2 = new Castle("Castelo 2");

c1.build();
c2.build();

Castle.prototype.build = function() {
  console.log("Sobrecrito o build");
};

c1.build();
c2.build();
