import UserInput from '../../hooks/user-input';
import { FormContainerRegister, SelectContainer,Input } from './style';
import { LoginButton } from '../LoginForm/style';
import { useState } from 'react';
import caretDown from '../../assets/img/CaretDown.svg';

function RegisterForm() {
  const [selectedStatus, setSelectedStatus] = useState('');

  const civilStatusOptions = [
    'Solteiro(a)',
    'Casado(a)',
    'Divorciado(a)',
    'Viúvo(a)'
  ];

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = UserInput(value => value.trim() !== '' && value.includes('@') && value.includes('.'));

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput
  } = UserInput(value => value.trim() !== '' && value.length >= 6);

  const {
    value: birthdayDate,
    isValid: birthdayDateIsValid,
    hasError: birthdayDateHasError,
    valueChangeHandler: birthdayDateChangeHandler,
    inputBlurHandler: birthdayDateBlurHandler,
    reset: resetBirthdayDateInput
  } = UserInput(value => value.trim() !== '');

  const {
    value: countryRegister,
    isValid: countryRegisterIsValid,
    hasError: countryRegisterHasError,
    valueChangeHandler: countryRegisterChangeHandler,
    inputBlurHandler: countryRegisterBlurHandler,
    reset: resetCountryRegisterInput
  } = UserInput(value => value.trim() !== '');

  const {
    value: professionRegister,
    isValid: professionRegisterIsValid,
    hasError: professionRegisterHasError,
    valueChangeHandler: professionRegisterChangeHandler,
    inputBlurHandler: professionRegisterBlurHandler,
    reset: resetProfessionRegisterInput
  } = UserInput(value => value.trim() !== '');

  const {
    value: cityRegister,
    isValid: cityRegisterIsValid,
    hasError: cityRegisterHasError,
    valueChangeHandler: cityRegisterChangeHandler,
    inputBlurHandler: cityRegisterBlurHandler,
    reset: resetCityRegisterInput
  } = UserInput(value => value.trim() !== '');


  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = UserInput(value => value.trim() !== '');


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
          placeholder="E-mail"
        />
        {emailHasError && (
          <p className="error-text">Por favor, insira um e-mail válido.</p>
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
          placeholder="Senha"
        />
        {passwordHasError && (
          <p className="error-text">Por favor, insira uma senha válida.</p>
        )}
      </div>
      
      <div>
      <Input
          type="text"
          placeholder="Nome"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          nameIsValid={nameIsValid}
          nameIsInvalid={nameHasError}
        />
      </div>

      <FormContainerRegister>
        <div>
          <Input
            type="date"
            id="birthdayDate"
            value={birthdayDate}
            onChange={birthdayDateChangeHandler}
            onBlur={birthdayDateBlurHandler}
            birthdayDateIsValid={birthdayDateIsValid}
            birthdayDateIsInvalid={birthdayDateHasError}
            placeholder="Nascimento"
          />

          <Input
            type="text"
            id="countryRegister"
            value={countryRegister}
            onChange={countryRegisterChangeHandler}
            onBlur={countryRegisterBlurHandler}
            countryIsValid={countryRegisterIsValid}
            countryIsInvalid={countryRegisterHasError}
            placeholder="País"
          />
        </div>
        <div>
          <Input
            type="text"
            id="professionRegister"
            value={professionRegister}
            onChange={professionRegisterChangeHandler}
            onBlur={professionRegisterBlurHandler}
            professionIsValid={professionRegisterIsValid}
            professionIsInvalid={professionRegisterHasError}
            placeholder="Profissão"
          />

          <Input
            type="text"
            id="cityRegister"
            value={cityRegister}
            onChange={cityRegisterChangeHandler}
            onBlur={cityRegisterBlurHandler}
            cityIsValid={cityRegisterIsValid}
            cityIsInvalid={cityRegisterHasError}
            placeholder="Cidade"
          />
        </div>
      </FormContainerRegister>
      <SelectContainer>
        <select value={selectedStatus} onChange={handleStatusChange}>
          <option value="" disabled>
            Relacionamento
          </option>
          {civilStatusOptions.map(status => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <img src={caretDown} alt="" />
      </SelectContainer>
      <LoginButton type="submit">Criar conta</LoginButton>
    </>
  );
}

export default RegisterForm;
