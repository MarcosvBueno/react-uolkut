import UserInput from '../../hooks/user-input';
import { FormContainerRegister, SelectContainer,Input } from './style';
import { LoginButton } from '../LoginForm/style';
import { useState,useContext} from 'react';
import caretDown from '../../assets/img/CaretDown.svg';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { auth } from '../../service/firebaseConfig';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { firebaseConfig } from '../../service/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user-context';

function RegisterForm() {
  const [selectedStatus, setSelectedStatus] = useState('');
  const navigate = useNavigate();

  const [
    createUserWithEmailAndPassword,
    user,
    error,
] = useCreateUserWithEmailAndPassword(auth)

  const {setRegisterForm,setLoginForm} = useContext(UserContext)!;

  
  function calculateAge(birthdayDate: string) {
    const today = new Date();
    const birthDate = new Date(birthdayDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }

  const civilStatusOptions = [
    'Solteiro(a)',
    'Casado(a)',
    'Divorciado(a)',
    'Viúvo(a)'
  ];

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };

  const db = getFirestore(firebaseConfig);
  const usersCollectionRef = collection(db, 'users');



  async function createNewUser() {
    try{
      const createdUser = await createUserWithEmailAndPassword(enteredEmail, enteredPassword);
      console.log(createdUser);
      const user = createdUser?.user;

      const calculatedAge = calculateAge(birthdayDate);
  
      const docRef = await addDoc(usersCollectionRef, {
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
        birthdayDate: birthdayDate,
        age: calculatedAge,
        country: countryRegister,
        profession: professionRegister,
        city: cityRegister,
        civilStatus: selectedStatus
      });
  
      console.log('Document written with ID: ', docRef.id); 
  
      resetEmailInput();
      resetPasswordInput();
      resetNameInput();
      resetBirthdayDateInput();
      resetCountryRegisterInput();
      resetProfessionRegisterInput();
      resetCityRegisterInput();

      setRegisterForm(false);
      setLoginForm(true);
  
    } catch (error) {
      console.log("Erro na criação de usuário",error);
    }


  }


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
      <LoginButton type="submit" onClick={createNewUser}>Criar conta</LoginButton>
    </>
  );
}

export default RegisterForm;
