import React, { useContext, useEffect } from "react";
import EditForm from "../../components/EditForm";
import { Container, ProfileHeader,UserProfile} from "./style";
import { UserContext } from "../../context/user-context";
import Modal from "../../components/Modal";
import editLogo from "../../assets/img/Mode-edit.svg";
import gabriel from "../../assets/img/gabriel.svg";
function EditProfile() {

//The constant retrieves shared functions and variables from the user context in the application to manage the login state and modal visibility.
  const {setUserIsLogged, modalIsVisible, setModalIsVisible} = useContext(UserContext)!;
   


//The useEffect hook sets the userIsLogged state to true when the component mounts or when setUserIsLogged changes, likely initializing or updating the user login status.
  useEffect(() => {
    setUserIsLogged(true);
  }, [setUserIsLogged]);

  return (
    <>
    <Container>
    <ProfileHeader>
      <UserProfile>
        <img src={gabriel} alt="" />
        <img src={editLogo} alt="" />
      </UserProfile>
      
    </ProfileHeader>
      <EditForm />
    </Container>
    </>
  );
}

export default EditProfile;
