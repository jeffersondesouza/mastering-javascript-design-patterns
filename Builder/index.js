/* var Westeros = {};

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
 */


const HttpGet = data => {
  return new Promise(resolve => resolve(data));
};

const TOKEN_RESPONSE = {
  payment__cc_number: "XXXX-XXXX-XXXX-1111",
  first_name: "joao@email.com",
  signup_cost: 5000,
  user_type: "PF",
  uc_number: "990197816",
  net_phase: 0,
  quota_signup_dates: ["2019-05-05T20:12:36.079Z"],
  invite_code: "MzsIPq",
  payment__cc_brand: "VISA",
  response: "Login realizado com sucesso!",
  token: "1a2s3d4f5g",
  email: "joao@email.com",
  profile_completion: 60,
  payment__cc_name: "joao@email.com joao@email.com",
  payment__exp_year: 2020,
  payment__exp_month: 1,
  last_name: "joao@email.com",
  complete_signup: true,
  status: 0,
  distributor_name: "CEEE-D"
};

/* 
endpoint <-> Repository (Contendo Mappers dos cases, e factories p fazer o model) -> Sagas (recbe o model pronto) --> Reducer(faz no máximo alguma redução p o state) 
*/

/* 
 - o modulo tokenMapper faz apenas traduz o snake case do server para camel case, e virse versa
 - se olharmos alguns dos dados vindo do token poder ser quebrados em models variados que juntos podem compor(dados de perfil, distribuidor, auth) um model mais rico com pequenas composições ( pois nao tem muita correlação o nome do usuário com a expiração do cartão)

 */
const tokenMapper = {
  fromValidate: res => {
    return {
      paymentCcNumber: res.payment__cc_number,
      firstName: res.first_name,
      signupCost: res.signup_cost,
      userType: res.user_type,
      ucNumber: res.uc_number,
      netPhase: res.net_phase,
      quotaSignupDates: res.quota_signup_dates,
      inviteCode: res.invite_code,
      paymentCcBrand: res.payment__cc_brand,
      response: res.response,
      token: res.token,
      email: res.email,
      profileCompletion: res.profile_completion,
      paymentCcName: res.payment__cc_name,
      paymentExpYear: res.payment__exp_year,
      paymentExpMonth: res.payment__exp_month,
      lastName: res.last_name,
      completeSignup: res.complete_signup,
      status: res.status,
      distributorName: res.distributor_name
    };
  }
};

// User (composto por partes menores do endpoint de token)
const UserModel = data => ({
  userProfile: userProfile(data),
  userCard: userCard(data),
  userDistributor: userDistributor(data),
  userAuth: userAuth(data)
});

const userProfile = data => ({
  firstName: data.firstName,
  lastName: data.lastName,
  userType: data.userType,
  email: data.email,
  inviteCode: data.inviteCode
});

const userCard = data => ({
  paymentCcBrand: data.paymentCcBrand,
  paymentCcName: data.paymentCcName,
  paymentExpYear: data.paymentExpYear,
  paymentExpMonth: data.paymentExpMonth
});

const userDistributor = data => ({
  token: data.token,
  profileCompletion: data.profileCompletion,
  completeSignup: data.completeSignup
});

const userAuth = data => ({
  token: data.token,
  profileCompletion: data.profileCompletion,
  completeSignup: data.completeSignup,
  signupCost: data.signupCost
});

// Repository (chama o ajax e retorna um mapa do objeto especializado)
const AuthRepository = {
  validateToken: () => {
    // faz o HTTP propriamente dito
    return HttpGet(TOKEN_RESPONSE)
      .then(tokenMapper.fromValidate)
      .then(UserModel);
  }
};

// Sagas chamando a API,

AuthRepository.validateToken().then(usuario =>
  console.log("usuario:", usuario)
);
