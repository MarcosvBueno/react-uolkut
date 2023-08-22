import UserInput from '../../hooks/user-input';
import { ContainerButtons } from '../ForgotPasswordForm/style';
import {  LoginButton } from '../LoginForm/style';
import { FormContainer,Input } from './style';
import { UserContext } from '../../context/user-context';
import { useContext } from 'react';
function NewPasswordForm() {
  const {
    setLoginForm,
    setForgotPasswordForm,
    newPasswordForm,
    setNewPasswordForm
  } = useContext(UserContext)!;

  const {
    value: sendCode,
    isValid: sendCodeIsValid,
    hasError: sendCodeHasError,
    valueChangeHandler: sendCodeChangeHandler,
    inputBlurHandler: sendCodeBlurHandler,
    reset: resetSendCodeInput
  } = UserInput(value => value.trim() !== '' && value.length === 6);

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput
  } = UserInput(value => value.trim() !== '' && value.length >= 6);

  const {
    value: enteredConfirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPasswordInput
  } = UserInput(
    value =>
      value.trim() !== '' && value.length >= 6 && value === enteredPassword
  );

  const handleLoginForm = () => {
    setNewPasswordForm(false);
    setLoginForm(true);
  };

  return (
    <>
      <FormContainer>
        <Input
          type="text"
          value={sendCode}
          onChange={sendCodeChangeHandler}
          onBlur={sendCodeBlurHandler}
          sendCodeIsValid={sendCodeIsValid}
          sendCodeIsInvalid={sendCodeHasError}
          placeholder="Código de Verificação"
        />

        <Input
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          passwordIsValid={passwordIsValid}
          passwordIsInvalid={passwordHasError}
          placeholder="Nova Senha"
        />

        <Input
          type="password"
          value={enteredConfirmPassword}
          onChange={confirmPasswordChangeHandler}
          onBlur={confirmPasswordBlurHandler}
          confirmPasswordIsValid={confirmPasswordIsValid}
          confirmPasswordIsInvalid={confirmPasswordHasError}
          placeholder="Confirmar Senha"
        />

        <LoginButton>Salvar</LoginButton>
      </FormContainer>

      <ContainerButtons>
        <button onClick={handleLoginForm}>Lembrou sua Senha?</button>
        <button onClick={handleLoginForm}>Entrar com as credenciais</button>
      </ContainerButtons>
    </>
  );
}

export default NewPasswordForm;
