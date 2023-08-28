import { EditFormContainer, Input, FormContainer } from './style';
import UserInput from '../../hooks/user-input';
import { useState ,useContext} from 'react';
import caretDown from '../../assets/img/CaretDown.svg';
import { UserContext } from '../../context/user-context';
import { getFirestore, doc,collection, updateDoc,getDoc, query, getDocs, where } from "firebase/firestore";
import { auth, firebaseConfig } from '../../service/firebaseConfig';
import Modal from '../Modal';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface User {
  name: string;
  email: string;
  password: string;
  country: string;
  city: string;
  birthdayDate: string;
  profession: string;
  civilStatus: string;
  age: number;
  uid: string;
}


function EditForm() {
  const [selectedStatus, setSelectedStatus] = useState('');
  const [userData, setUserData] = useState<User| null >(null);
  const {userUid,setModalIsVisible,modalIsVisible} = useContext(UserContext)!;

  const civilStatusOptions = [
    'Solteiro(a)',
    'Casado(a)',
    'Divorciado(a)',
    'Viúvo(a)'
  ];

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };

  const navigate = useNavigate();

  function calculateAge(birthdayDate: string) {
    const today = new Date();
    const birthDate = new Date(birthdayDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  const handleModalProfile = () => {
    setModalIsVisible(false);
    
    navigate('/profile');
  };


  const handleEditForm = async () => {
    const uid = Cookies.get('userUid');

    try {
      const db = getFirestore(firebaseConfig);
      const usersCollection = collection(db, 'users');
      const querySnapshot = await getDocs(
        query(usersCollection, where('uid', '==', uid))
      );  
      const userDoc = querySnapshot.docs[0].id;
      const docRef = doc(db, 'users', userDoc);
      const updateDocFields = {
        name: enteredName,
        profession: profession,
        city: city,
        country: country,
        birthdayDate: birthDate,
        civilStatus: selectedStatus,
        age: calculateAge(birthDate),
        password: password
      };
      const update = await updateDoc(docRef, updateDocFields);
      console.log(update);
      setModalIsVisible(true);
    } catch (e) {
      console.log(e);
    }
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
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
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
    <>
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
              placeholder="Nome"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              nameIsValid={nameIsValid}
              nameIsInvalid={nameHasError}
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
        <button onClick={handleEditForm}>Salvar</button>
      </div>
    </EditFormContainer>
    { modalIsVisible && <Modal text='Usuário atualizado com sucesso🥳' imageLogo={''} buttonContent={'Voltar para perfil'} buttonFunction={handleModalProfile}   />}
    </>
  );
}

export default EditForm;
  