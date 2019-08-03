var God = (function() {
  var God = function(pray) {
    this.pray = pray;
  };
  God.prototype.prayTo = function() {
    return this.pray;
  };

  return God;
})();

var WateryGod = (function() {
  function WateryGod() {}
  WateryGod.prototype.prayTo = function() {
    return new God("sea").prayTo();
  };

  return WateryGod;
})();

var AncientGods = (function() {
  function AncientGods() {}
  AncientGods.prototype.prayTo = function() {
    return "men";
  };
  return AncientGods;
})();

var DefaultGod = (function() {
  function DefaultGod() {}
  DefaultGod.prototype.prayTo = function() {
    return "gold";
  };
  return DefaultGod;
})();

var GodFactory = (function() {
  var GodFactory = function() {};

  GodFactory.prototype.build = function(godType) {
    if (godType === "water") {
      return new WateryGod();
    }

    if (godType === "ancient") {
      return new AncientGods();
    }

    return new DefaultGod();
  };

  return GodFactory;
})();

var godFactory = new GodFactory();

const g1 = godFactory.build("water");
const g2 = godFactory.build("ancient");
const g3 = godFactory.build();

console.log({
  g1: g1.prayTo(),
  g2: g2.prayTo(),
  g3: g3.prayTo()
});

var Prayer = (function() {
  function Prayer() {}
  Prayer.prototype.pray = function(godName) {
    console.log("Paying to: " + new GodFactory().build(godName).prayTo());
  };
  return Prayer;
})();

const p1 = new Prayer();

p1.pray("water");
