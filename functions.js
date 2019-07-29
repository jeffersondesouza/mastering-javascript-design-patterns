/* const marcador = document.getElementById("js-marcador");
let timer = 0;
setInterval(() => {
  timer++;
  marcador.innerHTML = timer;
}, 1000);
  */

 var functionObject = {
  greeting: "Hello world",
  doThings: function() {
    console.log(this.greeting);
    console.log(this);
    this.doOthersThings();
  },
  doOthersThings: function() {
    console.log(
      this.greeting
        .split("")
        .reverse()
        .join()
    );
  }
};

functionObject.doThings();

var FunctionObject = function(greeting) {
  console.log(this);
  this.greeting = greeting;
  this.doThings = function() {
    console.log(this.greeting);
    console.log(this);
    this.doOthersThings();
  };

  this.doOthersThings = function() {
    console.log(
      this.greeting
        .split("")
        .reverse()
        .join()
    );
  };
};

var fo = new FunctionObject("Ola mundo");
fo.doThings();

var Castel = function(name) {
  this.name = name;
};

Castel.prototype.build = function() {
  console.log(this.name);
};

const ct = new Castel("Winterfell");

ct.build();
