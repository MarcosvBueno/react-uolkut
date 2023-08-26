import {
  ProfileInfoSection,
  PhraseContainer,
  QualitiesContainer,
  StarContainer,
  PersonalInformation,
  UserInterests,
  Triangle,
} from './style';
import starIcon from '../../assets/img/Star.svg';
import heartIcon from '../../assets/img/Heart.svg';
import smileyIcon from '../../assets/img/Smiley.svg';
import thumbsUpIcon from '../../assets/img/ThumbsUp.svg';
import { useEffect ,useContext,useState, CSSProperties} from 'react';
import { UserContext } from '../../context/user-context';
import { collection, query, where, getDocs,getFirestore} from "firebase/firestore";
import PacmanLoader from 'react-spinners/PacmanLoader';



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


function ProfileInfo() {
  const [userData, setUserData] = useState<User| null >(null);
  const [loading, setLoading] = useState(false);
  const {userUid} = useContext(UserContext)!;

  useEffect(() => {
    getUserData();
  }, []);

  const override: CSSProperties = {
    display: "block",
    margin: "300px auto",
  };

  const getUserData = async () => {
    setLoading(true);
    try {
      console.log(userUid);
      console.log('teste');
      const db = getFirestore();
      const q = query(collection(db, "users"), where("uid", "==", userUid));
  
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setUserData(doc.data() as User);
      });
      setLoading(false);
    } catch (error) { 
      console.error("Error fetching user data:", error);
      
    }
    console .log(userData);
  }
  

  return (
    <>
    {loading && (<PacmanLoader color='#ED6D25' loading={loading} size={30} cssOverride={override} />)}
    {!loading && (<>
      <ProfileInfoSection>
        <h2>Boa tarde, {userData?.name}</h2>
        <Triangle />
        <PhraseContainer>
          <p>Programar sem café é igual poeta sem poesia.</p>
        </PhraseContainer>

        <QualitiesContainer>
          <div>
            <h3>Fãs</h3>
            <StarContainer>
              <img src={starIcon} alt="" />
              <p>85</p>
            </StarContainer>
          </div>

          <div>
            <h3>Confiável</h3>
            <img src={smileyIcon} alt="" />
            <img src={smileyIcon} alt="" />
          </div>
          <div>
            <h3>Legal</h3>
            <img src={thumbsUpIcon} alt="" />
            <img src={thumbsUpIcon} alt="" />
            <img src={thumbsUpIcon} alt="" />
          </div>

          <div>
            <h3>Sexy</h3>
            <img src={heartIcon} alt="" />
            <img src={heartIcon} alt="" />
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
