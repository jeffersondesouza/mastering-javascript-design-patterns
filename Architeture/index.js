
/* 
endpoint <-> Repository (Contendo Mappers dos cases, e factories p fazer o model) -> Sagas (recbe o model pronto) --> Reducer(faz no máximo alguma redução p o state) 
*/

/* 
 - o modulo authMapper faz apenas traduz o snake case do server para camel case, e virse versa
 - se olharmos alguns dos dados vindo do token poder ser quebrados em models variados que juntos podem compor(dados de perfil, distribuidor, auth) um model mais rico com pequenas composições ( pois nao tem muita correlação o nome do usuário com a expiração do cartão)

 */
const TOKEN_RESPONSE = {
  payment__cc_number: "XXXX-XXXX-XXXX-1111",
  first_name: "volmogiste@desoz.com",
  signup_cost: 5000,
  user_type: "PF",
  uc_number: "990197816",
  net_phase: 0,
  quota_signup_dates: ["2019-05-05T20:12:36.079Z"],
  invite_code: "MzsIPq",
  payment__cc_brand: "VISA",
  response: "Login realizado com sucesso!",
  token: "01918594a05b55e41ebad2a9371e7b89a268d53c",
  email: "volmogiste@desoz.com",
  profile_completion: 60,
  payment__cc_name: "volmogiste@desoz.com volmogiste@desoz.com",
  payment__exp_year: 2020,
  payment__exp_month: 1,
  last_name: "volmogiste@desoz.com",
  complete_signup: true,
  status: 0,
  distributor_name: "CEEE-D"
};

const LOGIN_VALUE_FROM_COMPONENT = {
  userName: "joao",
  email: "joao@email.com",
  password: "12345"
};


// Sagas chamando a API,
Http(TOKEN_RESPONSE).then(r => {
  console.log("###########   TOKEN    ###########");
  console.log("Responta do server: ", TOKEN_RESPONSE);
  console.log("saga mandou para o reducer: ");
});

AuthSagas.dispatchValidateToken().then(console.log);

/* ############# fazer request  ###################### */

Http({}, 500).then(r => {
  console.log("###########   LOGIN    ###########");
  console.log("Form value: ", LOGIN_VALUE_FROM_COMPONENT);
  console.log("valor enviado para http para login:");
});

AuthSagas.dispatchLogin(LOGIN_VALUE_FROM_COMPONENT).then(console.log);
