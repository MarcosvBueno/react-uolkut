import React, { useContext, useEffect } from "react";
import EditForm from "../../components/EditForm";
import { Container, ProfileHeader,UserProfile} from "./style";
import { UserContext } from "../../context/user-context";
import Modal from "../../components/Modal";
import editLogo from "../../assets/img/Mode-edit.svg";
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
    <ProfileHeader>
      <UserProfile>
        <img src='https://i.imgur.com/jguCgC7.png' alt="" />
        <img src={editLogo} alt="" />
      </UserProfile>
      
    </ProfileHeader>
      <EditForm />
    </Container>
    {modalIsVisible && <Modal imageLogo={""} text={"Informações alteradas ✔"} buttonContent={"Voltar para o perfil"} />}
    </>
  );
}

export default EditProfile;
