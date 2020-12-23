import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, signIn, signUp } from '../store/user';

const SignIn = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    dispatch(signIn({ credentials: data }));
  };

  // const registerUser = () => {
  //   dispatch(
  //     signUp({
  //       credentials: {
  //         email: 'hugo@gmail.com',
  //         password: '12345678',
  //         username: 'Hugo',
  //       },
  //     })
  //   );
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        name="email"
        ref={register}
        placeholder="Correo electrónico"
      />
      <input
        type="password"
        name="password"
        ref={register}
        placeholder="Contraseña"
      />
      <input type="submit" value="Enviar" />
      {/* <button onClick={registerUser}>registrar</button> */}
    </form>
  );
};

export default SignIn;
