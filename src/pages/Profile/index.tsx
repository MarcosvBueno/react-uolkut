import { useEffect,useContext} from 'react';
import SearchIcon from '../../assets/img/Search.svg';
import { Container,InputContainer} from './style';
import UserProfileHeader from '../../components/UserProfileHeader';
import ListOfFriends from '../../components/ListOfFriends';
import ListOfCommunity from '../../components/ListOfCommunity';
import ProfileInfo from '../../components/ProfileInfo';
import { UserContext } from '../../context/user-context';
import { useNavigate } from 'react-router';
function Profile() {
 // Getting the setUserIsLogged function from the UserContext using the useContext hook
 const {setUserIsLogged} = useContext(UserContext)!;
  
 // Getting the navigate function to perform programmatic navigation between routes
  const navigate = useNavigate();


  // Using the useEffect hook to perform a side effect
  // This will occur whenever the reference of the setUserIsLogged function changes
  useEffect(() => {
    // Setting the user's login state to "true" when the component is mounted
    setUserIsLogged(true);
  }, [setUserIsLogged]);


  return ( 
    <Container>
      <div className='inputDiv'>
      <InputContainer>
      <img src={SearchIcon} alt="" />
      <input type="text" placeholder='Pesquisar no Orkut' />
      </InputContainer>
      </div>
      <div className='profileHeaderDiv'>
      <UserProfileHeader
        name="Iuri Silva"
        status="Solteiro, Brasil"
        buttonContent="Editar meu perfil"
        handleButton={() => { navigate('/edit-profile')}}
      />
      </div>
      <div className='ProfileInfoDiv'>
      <ProfileInfo /> 
      </div>

      <div className='ListFriendsDiv'>
      <ListOfFriends />
      </div>
      <div className='ListCommunityDiv'>
      <ListOfCommunity />
      </div>
      
      
     
    </Container>
   );
}

export default Profile;