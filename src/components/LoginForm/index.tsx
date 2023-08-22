import { useState } from 'react';
import { Input, LoginButton, CreateAccountButton, ForgotPasswordLink, RememberMeContainer, CustomCheckboxInput, CustomCheckboxLabel, RememberMeText } from './style';
import UserInput from '../../hooks/user-input';
import { useContext, useEffect, ChangeEvent } from 'react';
import { UserContext } from '../../context/user-context';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

  
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


  // Handles the "Remember Me" checkbox change event. Updates the rememberPassword state based on the checkbox status.
  const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRememberPassword(e.target.checked);
  };

  const navigate = useNavigate();
  const handleLoginForm = () => {
    if(!formIsValid) {
      return;
    }
    setUserIsLogged(true);
    navigate('/profile');
  };

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