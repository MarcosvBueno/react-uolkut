import React, { useContext,useState,useEffect } from "react";
import { HeaderWrapper,HeaderLogin,NavContent,PerfilContent, InputContent,ContainerInputWUser } from "./style";
import logo from "../../assets/img/logo-orkut.svg";
import SearchIcon from '../../assets/img/Search.svg'
import { UserContext } from "../../context/user-context";
import caretIcon from '../../assets/img/CaretDown.svg';
import { collection, query, where, getDocs,getFirestore} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import gabriel from '../../assets/img/gabriel.svg';
import Cookies from "js-cookie";

export interface User {
  name: string;
  
}


function Header() {
  const [searchInput, setSearchInput] = useState('');
  const { userIsLogged,userUid } = useContext(UserContext)!;
  const [userData, setUserData] = useState<User| null >(null);


  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const storedUserData = Cookies.get('userData');
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        } else {
          getUserData(userUid); 
        }
      }
    });

  }, [userUid]);

  const getUserData = async (uid: string) => {
    console.log(userUid);
    try {
      const db = getFirestore();
      const q = query(collection(db, "users"), where("uid", "==", uid));
  
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setUserData(doc.data() as User);
        Cookies.set('userData', JSON.stringify(doc.data()));
      });
      
    } catch (error) { 
      console.error("Error fetching user data:", error);
      
    }
  }


  const clearUserData = () => {
    Cookies.remove('userData');
    Cookies.remove('userSearch');
  };

  const HandleSearch = (event: React.ChangeEvent<HTMLInputElement>  ) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    console.log(inputValue);

    if(searchInput.length > 0) {
      console.log('pesquisa');
      handleSearchUsers(inputValue);
    }
  }

  const handleSearchUsers = async (searchInput: string) => {
    try {
        console.log('Iniciando pesquisa no banco ');
        const db = getFirestore();
        const q = query(collection(db, "users"), where("name", "==", searchInput));
    
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          Cookies.set('userSearch', JSON.stringify(doc.data()));
          window.location.href = '/profile';
          
        });
      } catch (e) {
        console.log(e);
      }

  }


  return (  
    <>
    {!userIsLogged && <HeaderWrapper>
      <div>
        <img src={logo} alt="" />
        <nav>
          <a href="/">Centro de segurança</a>
        </nav>
      </div>
    </HeaderWrapper>}
    {userIsLogged && 
    <HeaderLogin>
      <div>
      <NavContent>
        <img src={logo} alt="" />
        <nav>
        <ul>
          <li><a href="/" onClick={clearUserData}>Início</a></li>
          <li className="profile-link"><a href="/profile">Perfil</a></li>
          <li><a href="/community">Comunidades</a></li>
          <li><a href="/games">Jogos</a></li>
        </ul>
        </nav>
      </NavContent>
      <ContainerInputWUser>
      <InputContent >
        <img src={SearchIcon} alt="" />
        <input type="text" placeholder="Pesquisar no UOLkut" value={searchInput} onChange={HandleSearch} />
      </InputContent>

      <PerfilContent>
        <img src={gabriel} alt="" />

        <p>{userData?.name }</p>

        <img src={caretIcon} alt="" />
        </PerfilContent>

      </ContainerInputWUser>
      </div>
    </HeaderLogin>}
    </>
  );
}

export default Header;