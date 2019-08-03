
// Repository (chama o ajax e retorna um mapa do objeto especializado)
const AuthHttpRepository = {
  validateToken: () => {
    // faz o HTTP propriamente dito
    return Http(TOKEN_RESPONSE)
      .then(authMapper.fromValidate)
      .then(UserModel);
  },
  login: params => {
    // faz o HTTP propriamente dito
    return Http(params, 600).then(authMapper.toLogin);
  }
};