import React, { useContext, useEffect } from "react";
import EditForm from "../../components/EditForm";
import { Container, ProfileSide} from "./style";
import UserProfileHeader from '../../components/UserProfileHeader';
import { UserContext } from "../../context/user-context";
import Modal from "../../components/Modal";
function EditProfile() {

//The constant retrieves shared functions and variables from the user context in the application to manage the login state and modal visibility.
  const {setUserIsLogged, modalIsVisible, setModalIsVisible} = useContext(UserContext)!;

//This function serves to set the modalIsVisible state to true, making the modal visible in the user interface.
  function handleModal() {
    setModalIsVisible(true)
  }

//The useEffect hook sets the userIsLogged state to true when the component mounts or when setUserIsLogged changes, likely initializing or updating the user login status.
  useEffect(() => {
    setUserIsLogged(true);
  }, [setUserIsLogged]);

  return (
    <>
    <Container>
      <ProfileSide>
      <UserProfileHeader
        name="Iuri Silva"
        status="Solteiro, Brasil"
        buttonContent="Salvar"
        handleButton={handleModal}
      />
      </ProfileSide>
      <EditForm />
    </Container>
    {modalIsVisible && <Modal imageLogo={""} text={"Informações alteradas ✔"} buttonContent={"Voltar para o perfil"} buttonLink={"/profile"} />}
    </>
  );
}

export default EditProfile;
