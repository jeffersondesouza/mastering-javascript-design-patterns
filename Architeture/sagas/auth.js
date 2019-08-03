const AuthSagas = {
  dispatchValidateToken: () => {
    // seria o filho do watchValidateToken
    return AuthHttpRepository.validateToken();
  },
  dispatchLogin: params => {
    return AuthHttpRepository.login(params);
  }
};
