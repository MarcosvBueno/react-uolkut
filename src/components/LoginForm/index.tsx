import { useState } from 'react';
import { Input, LoginButton, CreateAccountButton, ForgotPasswordLink, RememberMeContainer, CustomCheckboxInput, CustomCheckboxLabel, RememberMeText } from './style';
import UserInput from '../../hooks/user-input';
import { useContext, useEffect, ChangeEvent } from 'react';
import { UserContext } from '../../context/user-context';
import { useNavigate } from 'react-router-dom';

import {signInWithEmailAndPassword,getAuth } from 'firebase/auth';



function LoginForm() {
  const navigate = useNavigate();
  
  const [rememberPassword, setRememberPassword] = useState(false);

  const {setUserIsLogged,setRegisterForm,setLoginForm,setForgotPasswordForm} = useContext(UserContext)!;

  useEffect(() => {
    setUserIsLogged(false);
  }, [setUserIsLogged]);


  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = UserInput(value => value.trim() !== ''  && value.includes('@') && value.includes('.'));

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput
  } = UserInput(value => value.length >= 6 );

  const formIsValid = emailIsValid && passwordIsValid;
  
  const handleRegisterForm = () => {
    setLoginForm(false);
    setRegisterForm(true);
  }

  const handleForgotPasswordForm = () => {
    setLoginForm(false);
    setForgotPasswordForm(true);
  }


 
  const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRememberPassword(e.target.checked);
  };

  const handleLoginForm =  () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, enteredEmail,enteredPassword)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    navigate('/profile');
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);

  });
    
  }



  return ( 
    <>
    <div>
        <Input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            emailIsValid={emailIsValid}
            emailIsInvalid={emailHasError}
            placeholder='E-mail'
        />
        {emailHasError && (
            <p className='error-text'>Por favor, insira um e-mail válido.</p>
        )}
    </div>
    <div>
        <Input  
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            passwordIsValid={passwordIsValid}
            passwordIsInvalid={passwordHasError}
            placeholder='Senha'
        />
        {passwordHasError && (
            <p>Por favor, insira uma senha válida.</p>
        )}
    </div>
    <RememberMeContainer>
      <CustomCheckboxInput
        id="rememberMe"
        type="checkbox"
        checked={rememberPassword}
        onChange={handleRememberMeChange}
      />
      <CustomCheckboxLabel htmlFor="rememberMe" />
      <label htmlFor="rememberMe">
        <RememberMeText>Lembrar minha senha</RememberMeText>
      </label>
    </RememberMeContainer>

    <LoginButton type="submit" onClick={handleLoginForm }>Entrar na conta</LoginButton>
    <CreateAccountButton type="button" onClick={handleRegisterForm}>Criar uma conta</CreateAccountButton>
    <ForgotPasswordLink title="Esqueci a minha senha" onClick={handleForgotPasswordForm}>
      Esqueci a minha senha
    </ForgotPasswordLink>
    </>
   );
}

export default LoginForm;