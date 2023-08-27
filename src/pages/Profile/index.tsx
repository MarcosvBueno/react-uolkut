import { useEffect,useContext,useState} from 'react';
import SearchIcon from '../../assets/img/Search.svg';
import { Container,InputContainer} from './style';
import UserProfileHeader from '../../components/UserProfileHeader';
import ListOfFriends from '../../components/ListOfFriends';
import ListOfCommunity from '../../components/ListOfCommunity';
import ProfileInfo from '../../components/ProfileInfo';
import { UserContext } from '../../context/user-context';
import { useNavigate } from 'react-router';
import { collection, query, where, getDocs,getFirestore} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

interface User {
  name: string;
  civilStatus: string;
  country: string;
  imageUser: string;

}


function Profile() {
  const [userData, setUserData] = useState<User| null >(null);
  const [loading, setLoading] = useState(false);
  const {userUid,setUserIsLogged} = useContext(UserContext)!;

  useEffect(() => {
  setUserIsLogged(true);
  }, [setUserIsLogged]);




  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        } else {
          getUserData(userUid);
        }
      }
    });
  }, []);

  const getUserData = async (uid : string) => {
    setLoading(true);
    try {
      console.log(userUid);
      console.log('teste');
      const db = getFirestore();
      const q = query(collection(db, "users"), where("uid", "==", uid));
  
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setUserData(doc.data() as User);
        localStorage.setItem('userData', JSON.stringify(doc.data()));
      });
      setLoading(false);
    } catch (error) { 
      console.error("Error fetching user data:", error);
      
    }
  }



  const navigate = useNavigate();

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
        imageUser={userData?.imageUser || ''}
        name={userData?.name || ''}
        status={`${userData?.civilStatus || ''}, ${userData?.country || ''}`}
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