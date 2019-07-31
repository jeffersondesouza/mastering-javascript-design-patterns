var Westeros;

(function(Westeros) {
  (function(Ruling) {
    (function(Lannister) {
      var KingJoffery = (function() {
        function KingJoffery() {}
        KingJoffery.prototype.makeDecision = function() {
          console.log("Decision made by King Joffery");
        };
        KingJoffery.prototype.marry = function() {};
        return KingJoffery;
      })();

      Lannister.KingJoffery = KingJoffery;

      var LordTywin = (function() {
        function LordTywin() {}
        LordTywin.prototype.makeDecision = function() {
          console.log("Decision made by Lord Tywin");
        };
        return LordTywin;
      })();
      Lannister.LordTywin = LordTywin;

      var LannisterFactory = (function() {
        function LannisterFactory() {}
        LannisterFactory.prototype.getKing = function() {
          return new KingJoffery();
        };
        LannisterFactory.prototype.getHandOfTheKing = function() {
          return new LordTywin();
        };
        return LannisterFactory;
      })();
      Lannister.LannisterFactory = LannisterFactory;
    })(Ruling.Lannister || (Ruling.Lannister = {}));
  })(Westeros.Ruling || (Westeros.Ruling = {}));
})(Westeros || (Westeros = {}));

(function(Westeros) {
  (function(Ruling) {
    var CourtSession = (function() {
      function CourtSession(abstractFactory) {
        this.abstractFactory = abstractFactory;
        this.COMPLAINT_THRESHOLD = 10;
      }
      CourtSession.prototype.complaintPresented = function(complaint) {
        if (complaint.severity < this.COMPLAINT_THRESHOLD) {
          this.abstractFactory.getHandOfTheKing().makeDecision();
        } else this.abstractFactory.getKing().makeDecision();
      };
      return CourtSession;
    })();
    Ruling.CourtSession = CourtSession;
  })(Westeros.Ruling || (Westeros.Ruling = {}));
  var Ruling = Westeros.Ruling;
})(Westeros || (Westeros = {}));
const lannisterFact = new Westeros.Ruling.Lannister.LannisterFactory();

const court1 = new Westeros.Ruling.CourtSession(
  new Westeros.Ruling.Lannister.LannisterFactory()
);
court1.complaintPresented({ severity: 11 });

// court1.complaintPresented({ severity: 1 });
// const courtSession1 = new Westeros.Ruling.CourtSession();
// console.log('courtSession1:', courtSession1)
