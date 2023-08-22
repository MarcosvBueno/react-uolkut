import { EditFormContainer, Input, FormContainer } from './style';
import UserInput from '../../hooks/user-input';
import { useState } from 'react';
import caretDown from '../../assets/img/CaretDown.svg'

function EditForm() {
  const [editUser, setEditUser] = useState({});
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
    value: profession,
    isValid: professionIsValid,
    hasError: professionHasError,
    valueChangeHandler: professionChangeHandler,
    inputBlurHandler: professionBlurHandler,
    reset: resetProfessionInput
  } = UserInput(value => value.trim() !== '');

  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput
  } = UserInput(value => value.trim() !== '');

  const {
    value: country,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: resetCountryInput
  } = UserInput(value => value.trim() !== '');

  const {
    value: birthDate,
    isValid: birthDateIsValid,
    hasError: birthDateHasError,
    valueChangeHandler: birthDateChangeHandler,
    inputBlurHandler: birthDateBlurHandler,
    reset: resetBirthDateInput
  } = UserInput(value => value.trim() !== '');

  const {
    value: password ,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput
  } = UserInput(value => value.length >= 6 && value.trim() !== '');

  const {
    value: passwordConfirmation,
    isValid: passwordConfirmationIsValid,
    hasError: passwordConfirmationHasError,
    valueChangeHandler: passwordConfirmationChangeHandler,
    inputBlurHandler: passwordConfirmationBlurHandler,
    reset: resetPasswordConfirmationInput
  } = UserInput(value => value === password && value.trim() !== '' && passwordIsValid);

  return (
    <EditFormContainer>
      <div>
        <h1>Editar informações</h1>
        <FormContainer>
          <div>
            <Input
              type="text"
              onChange={professionChangeHandler}
              onBlur={professionBlurHandler}
              value={profession}
              professionIsValid={professionIsValid}
              professionIsInvalid={professionHasError}
              placeholder="Profissão"
            />

            <Input
              type="text"
              onChange={cityChangeHandler}
              onBlur={cityBlurHandler}
              value={city}
              cityIsValid={cityIsValid}
              cityIsInvalid={cityHasError}
              placeholder="Cidade"
            />

            <Input
              type="text"
              onChange={countryChangeHandler}
              onBlur={countryBlurHandler}
              value={country}
              countryIsValid={countryIsValid}
              countryIsInvalid={countryHasError}
              placeholder="Pais"
            />

            <Input
              type="date"
              onChange={birthDateChangeHandler}
              onBlur={birthDateBlurHandler}
              value={birthDate}
              birthDateIsValid={birthDateIsValid}
              birthDateIsInvalid={birthDateHasError}
              placeholder="DD/MM/AAAA"
            />

            <Input
              type="password"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={password}
              passwordIsValid={passwordIsValid}
              passwordIsInvalid={passwordHasError}
              placeholder="Senha"
            />

            <Input
              type="password"
              onChange={passwordConfirmationChangeHandler}
              onBlur={passwordConfirmationBlurHandler}
              value={passwordConfirmation}
              passwordConfirmationIsValid={passwordConfirmationIsValid}
              passwordIsInvalid={passwordConfirmationHasError}
              placeholder="Repetir Senha"
            />
          </div>

          <div>
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
          </div>
        </FormContainer>
        <button>Salvar</button>
      </div>
    </EditFormContainer>
  );
}

export default EditForm;
