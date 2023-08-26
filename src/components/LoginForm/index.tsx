import { useState,CSSProperties } from 'react';
import { Input, LoginButton, CreateAccountButton, ForgotPasswordLink, RememberMeContainer, CustomCheckboxInput, CustomCheckboxLabel, RememberMeText } from './style';
import UserInput from '../../hooks/user-input';
import { useContext, useEffect, ChangeEvent } from 'react';
import { UserContext } from '../../context/user-context';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import {signInWithEmailAndPassword,getAuth } from 'firebase/auth';
import PacmanLoader from 'react-spinners/PacmanLoader';


function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  const {setModalIsVisible,modalIsVisible,setUserUid} = useContext(UserContext)!;

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };
  

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

  const handleLoginForm = () => {
    setLoading(true);
    const auth = getAuth();
    const delayTime = 4000; // 4 seconds
    setTimeout(() => {
      signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
          console.log("Login feito com sucesso:", user?.uid);
          setUserUid(user?.uid);
          navigate('/profile');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setLoading(false);
          setModalIsVisible(true);
          resetEmailInput();
          resetPasswordInput();
        });
    }, delayTime);
  };
  



  return ( 
    <>
    {loading && (<PacmanLoader color='#ED6D25' loading={loading} size={30} cssOverride={override} />)}
    {!loading && (  
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
    </>)}
    {modalIsVisible && <Modal imageLogo={""} text={"E-mail ou senha inválidos"} buttonContent={"Tentar novamente"}  buttonFunction={() => setModalIsVisible(false)}/>}
    </>
   );
}

export default LoginForm;