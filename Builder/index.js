var Westeros = {};

var Event = (function() {
  return function Event(name) {
    this.name = name;
  };
})();

Westeros.Event = Event;

var Prize = (function() {
  function Prize(name) {
    this.name = name;
  }
  return Prize;
})();
Westeros.Prize = Prize;

var Attendee = (function() {
  function Attendee(name) {
    this.name = name;
  }
  return Attendee;
})();
Westeros.Attendee = Attendee;

var Tournament = (function() {
  function Tournament() {
    this.events = [];
    this.prizes = [];
    this.attendees = [];
  }

  return Tournament;
})();

var LannisterTournamentBuilder = (function() {
  var LannisterTournamentBuilder = function() {};

  LannisterTournamentBuilder.prototype.build = function() {
    var tournament = new Tournament();
    tournament.events.push(new Event("Joust"));
    tournament.events.push(new Event("Melee"));

    tournament.prizes.push(new Prize("10 god"));
    tournament.prizes.push(new Prize("More Gold"));

    tournament.attendees.push(new Attendee("Jamie"));
    tournament.attendees.push(new Attendee("Tyrion"));

    return tournament;
  };

  return LannisterTournamentBuilder;
})();

var BaratheanTournamentBuilder = (function() {
  var BaratheanTournamentBuilder = function() {};

  BaratheanTournamentBuilder.prototype.build = function() {
    var tournament = new Tournament();
    tournament.events.push(new Event("Melee"));

    tournament.prizes.push(new Prize("Wine"));
    tournament.prizes.push(new Prize("bitch"));

    tournament.attendees.push(new Attendee("robert"));
    tournament.attendees.push(new Attendee("James"));
    tournament.attendees.push(new Attendee("Starke"));
    return tournament;
  };

  return BaratheanTournamentBuilder;
})();

var TournamentBuilder = (function() {
  var TournamentBuilder = function() {};

  TournamentBuilder.prototype.build = function(builder) {
    return builder.build();
  };

  return TournamentBuilder;
})();

var builderTour = new TournamentBuilder();

var tourL = builderTour.build(new LannisterTournamentBuilder());

console.log("tourL:", tourL);
