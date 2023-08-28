import {
  ProfileInfoSection,
  PhraseContainer,
  QualitiesContainer,
  StarContainer,
  PersonalInformation,
  UserInterests,
  Triangle,
  ContainerImageBack
} from './style';
import starIcon from '../../assets/img/Star.svg';
import heartIcon from '../../assets/img/Heart.svg';
import smileyIcon from '../../assets/img/Smiley.svg';
import thumbsUpIcon from '../../assets/img/ThumbsUp.svg';
import CaretDown from '../../assets/img/CaretDown.svg';
import { useEffect ,useContext,useState, CSSProperties} from 'react';
import { UserContext } from '../../context/user-context';
import { collection, query, where, getDocs,getFirestore} from "firebase/firestore";
import PacmanLoader from 'react-spinners/PacmanLoader';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Cookies from 'js-cookie';

export interface User {
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


function ProfileInfo() {
  const [userData, setUserData] = useState<User| null >(null);
  const [userSearch, setUserSearch] = useState(false); 
  const [loading, setLoading] = useState(false);
  const {userUid} = useContext(UserContext)!;
  const [countStar, setCountStar] = useState(85);
  const [countSmiley, setCountSmiley] = useState(3);	
  const [countHeart, setCountHeart] = useState(19);
  const [countThumbsUp, setCountThumbsUp] = useState(40);


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
       const storedUserData = Cookies.get('userData');
        const storedSearchUser = Cookies.get('userSearch');
        if (storedUserData) {
          console.log('achei');
          setUserData(JSON.parse(storedUserData));
          setUserSearch(false);
        }
        if (storedSearchUser) {
          console.log('pesquisei');
          setUserData(JSON.parse(storedSearchUser));
          setUserSearch(true);

        } else {
          getUserData(userUid);
        }
      }
    });
  }, []);


  const override: CSSProperties = {
    display: "block",
    margin: "300px auto",
  };


  const getUserData = async (uid : string) => {
    setLoading(true);
    try {
      Cookies.get('tokenAuth')
      const uid = Cookies.get('userUid')
      const db = getFirestore();
      const q = query(collection(db, "users"), where("uid", "==", uid));
  
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setUserData(doc.data() as User);
        
        Cookies.set('userData', JSON.stringify(doc.data()));

      });
      setLoading(false);
    } catch (error) { 
      console.error("Error fetching user data:", error);
      
    }
  }

  const handleBacktoUser = () => {
    Cookies.remove('userSearch');
    window.location.href = '/profile';
    setUserSearch(false);
  }
  

  return (
    <>
    {loading && (<PacmanLoader color='#ED6D25' loading={loading} size={30} cssOverride={override} />)}
    {!loading && (<>
    
      <ProfileInfoSection>
      {userSearch && <ContainerImageBack src={CaretDown} onClick={handleBacktoUser}/> }
        {!userSearch ? (<h2>Boa tarde, {userData?.name}</h2>) : (<h2>Usuário(a): {userData?.name}</h2>)}
        <Triangle userSearch={userSearch}/>
        <PhraseContainer>
          <p>Programar sem café é igual poeta sem poesia.</p>
        </PhraseContainer>

        <QualitiesContainer>
          <div>
            <h3>Fãs</h3>
            <StarContainer>
              <img src={starIcon} alt="" onClick={() => setCountStar(countStar + 1)}/>
              <p>{countStar}</p>
            </StarContainer>
          </div>

          <div>
            <h3>Confiável</h3>
            <StarContainer>
            <img src={smileyIcon} alt="" onClick={() => setCountSmiley(countSmiley + 1)}/>
            <img src={smileyIcon} alt="" onClick={() => setCountSmiley(countSmiley + 1)}/>
            <p>{countSmiley}</p>
            </StarContainer>
          </div>
          <div>
            <h3>Legal</h3>
            <StarContainer>
            <img src={thumbsUpIcon} alt="" onClick={() => setCountThumbsUp(countThumbsUp + 1)}/>
            <img src={thumbsUpIcon} alt="" onClick={() => setCountThumbsUp(countThumbsUp + 1)}/>
            <img src={thumbsUpIcon} alt="" onClick={() => setCountThumbsUp(countThumbsUp + 1)}/>
            <p>{countThumbsUp}</p>
            </StarContainer>
          </div>

          <div>
            <h3>Sexy</h3>
            <StarContainer>
            <img src={heartIcon} alt="" onClick={() => setCountHeart(countHeart + 1)}/>
            <img src={heartIcon} alt="" onClick={() => setCountHeart(countHeart + 1)}/>
            <p>{countHeart}</p>
            </StarContainer>
          </div>
        </QualitiesContainer>

        <PersonalInformation>
          <div>
            <h3>Relacionamento:</h3>
            <p>{userData?.civilStatus}</p>
          </div>
          <div>
            <h3>Aniversário:</h3>
            <p>{userData?.birthdayDate}</p>
          </div>
          <div>
            <h3>Idade:</h3>
            <p>{userData?.age}</p>
          </div>
          <div>
            <h3>Interesses no Orkut:</h3>
            <p>{userData?.civilStatus}</p>
          </div>
          <div>
            <h3>Quem sou eu:</h3>
            <p>{userData?.profession}</p>
          </div>
          <div>
            <h3>Moro:</h3>
            <p>{userData?.city}</p>
          </div>
          <div>
            <h3>País:</h3>
            <p>{userData?.country}</p>
          </div>
          <div>
            <h3>Cidade</h3>
            <p>{userData?.city}</p>
          </div>

          <UserInterests>
            <div>
              <h3>Músicas:</h3>
              <p>Trap</p>
              <p>Rap</p>
              <p>Indie</p>
              <button>Ver todos</button>
            </div>
            <div>
              <h3>Filmes:</h3>
              <p>A rede social</p>
              <p>Meu amigo Totoro</p>
              <button>Ver todos</button>
            </div>
          </UserInterests>
        </PersonalInformation>
      </ProfileInfoSection>
    </>)}
      
    </>
  );
}

export default ProfileInfo;
