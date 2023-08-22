import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect
} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user-context';
import logo from '../../assets/img/logo-orkut-simples.svg';
import UserInput from '../../hooks/user-input';
 
import {Form,LoginFormContainer,LoginTitle,} from './style';
import RegisterForm from '../RegisterForm';
import LoginForm from '../LoginForm';
import ForgotPasswordForm from '../ForgotPasswordForm';
import NewPasswordForm from '../NewPasswordForm';

function AuthForm() {
  const [pageTitle, setPageTitle] = useState('Acesse o OULrkut');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const {setUserIsLogged,loginForm,registerForm,forgotPasswordForm,newPasswordForm} = useContext(UserContext)!;

  useEffect(() => {
    setUserIsLogged(false);

    // Atualizar o título com base na página
    if (loginForm) {
      setPageTitle('Acesse o OULkut');
    } else if (registerForm) {
      setPageTitle('Cadastre-se o UOLkut');
    } else if (forgotPasswordForm) {
      setPageTitle('Recupere sua senha');
    } else if (newPasswordForm) {
      setPageTitle('Nova senha');
    }
  }, [setUserIsLogged, loginForm, registerForm, forgotPasswordForm, newPasswordForm]);

  // Handles form submission. Prevents default form submission, marks the form as submitted, and calls handleLogin.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };


  return (
    <LoginFormContainer>
      <img src={logo} alt="Logo" />
      <LoginTitle>{pageTitle}</LoginTitle>
      <Form onSubmit={handleSubmit}>

      {loginForm && <LoginForm />} 
      {registerForm && <RegisterForm />}
      {forgotPasswordForm && <ForgotPasswordForm />}
      {newPasswordForm && <NewPasswordForm />}
      

      </Form>
    </LoginFormContainer>
  );
}

export default AuthForm;

