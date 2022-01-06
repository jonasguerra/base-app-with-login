import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import CustomButton from '../../components/Button';
import TextField from '../../components/TextInput';
import { Container, InputContainer, Title } from './styles';

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Formato inválido')
      .required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
  })
  .required();

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    alert('submited');
  };

  return (
    <Container>
      <Title style={{}}>Login</Title>
      <InputContainer>
        <TextField
          control={control}
          name="email"
          label="Email"
          errorMessage={errors.email?.message}
          textContentType="emailAddress"
        />
        <TextField
          control={control}
          name="password"
          label="Password"
          errorMessage={errors.password?.message}
          textContentType="password"
          secureTextEntry
        />
        <CustomButton
          title="Login"
          onPress={handleSubmit(onSubmit)}
        />
      </InputContainer>
    </Container>
  );
}

export default Login;
