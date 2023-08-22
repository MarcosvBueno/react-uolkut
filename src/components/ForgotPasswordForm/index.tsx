import UserInput from '../../hooks/user-input';
import { LoginButton } from '../LoginForm/style';
import { ForgotPasswordFormContainer, ContainerButtons,Input } from './style';
import { UserContext } from '../../context/user-context';
import { useContext } from 'react';
import Modal from '../Modal';
function ForgotPasswordForm() {
  const {
    setLoginForm,
    setForgotPasswordForm,
    newPasswordForm,
    setNewPasswordForm
  } = useContext(UserContext)!;

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = UserInput(
    value => value.trim() !== '' && value.includes('@') && value.includes('.')
  );

  const handleLoginForm = () => {
    setForgotPasswordForm(false);
    setLoginForm(true);
  };

  const handleNewPasswordForm = () => {
    if (emailIsValid) {
      setForgotPasswordForm(false);
      setNewPasswordForm(true);
    }
  };

  return (
    <>
      <ForgotPasswordFormContainer>
        <div>
          <Input
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            placeholder="E-mail Cadastrado"
            emailIsValid={emailIsValid}
            emailIsInvalid={emailHasError}
          />
          {emailHasError && <p>Por favor, insira um e-mail válido.</p>}

          <LoginButton onClick={handleNewPasswordForm}>
            Enviar Código
          </LoginButton>
        </div>
        <ContainerButtons>
          <button onClick={handleLoginForm}>Lembrou sua Senha?</button>
          <button onClick={handleLoginForm}>Entrar com as credenciais</button>
        </ContainerButtons>
      </ForgotPasswordFormContainer>
    </>
  );
}

export default ForgotPasswordForm;
