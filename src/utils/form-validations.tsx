const emailPatternValidation = {
  value:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: 'Formato de e-mail inválido',
};

export const LoginValidations = {
  email: {
    required: 'E-mail é obrigatório',
    pattern: emailPatternValidation,
  },
  password: {
    required: 'Senha é obrigatória',
  },
};
