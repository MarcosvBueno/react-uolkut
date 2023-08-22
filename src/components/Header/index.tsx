import React, { useContext } from "react";
import { HeaderWrapper,HeaderLogin,NavContent,PerfilContent, InputContent,ContainerInputWUser } from "./style";
import logo from "../../assets/img/logo-orkut.svg";
import SearchIcon from '../../assets/img/Search.svg'
import { UserContext } from "../../context/user-context";
import caretIcon from '../../assets/img/CaretDown.svg'
function Header() {

  const { userIsLogged } = useContext(UserContext)!;
  console.log(userIsLogged);
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
          <li><a href="/">Início</a></li>
          <li className="profile-link"><a href="/profile">Perfil</a></li>
          <li><a href="/community">Comunidades</a></li>
          <li><a href="/games">Jogos</a></li>
        </ul>
        </nav>
      </NavContent>
      <ContainerInputWUser>
      <InputContent >
        <img src={SearchIcon} alt="" />
        <input type="text" placeholder="Pesquisar no Orkut" />
      </InputContent>
      <PerfilContent>
        <img src='https://i.imgur.com/jguCgC7.png' alt="" />
        <p>Iuri Silva</p>
        <img src={caretIcon} alt="" />
        </PerfilContent>
      </ContainerInputWUser>
      </div>
    </HeaderLogin>}
    </>
  );
}

export default Header;