import {CommunityList,} from './style';
import profileImage from '../../assets/img/profile-image.png';
function ListsOfCommunity() {
  return (
    <>
      <CommunityList>
        <div>
          <h3>Comunidade (42)</h3>
          <button>Ver todos</button>
        </div>

        <div>
          <div>
            <img src='https://i.imgur.com/bX3Ifjp.png' alt="" />
            <p>Carros</p>
          </div>
          <div>
            <img src='https://i.imgur.com/ROqwqw4.png' alt="" />
            <p>Desenhos</p>
          </div>
          <div>
            <img src='https://i.imgur.com/GejNWt4.png' alt="" />
            <p>Crazy</p>
          </div>
        </div>

        <div>
          <div>
            <img src='https://i.imgur.com/nrIosPU.png' alt="" />
            <p>Fofos</p>
          </div>
          <div>
            <img src='https://i.imgur.com/qCvbyYR.png' alt="" />
            <p>Animes</p>
          </div>
          <div>
            <img src='https://i.imgur.com/DCN6mIZ.png' alt="" />
            <p>Leitura</p>
          </div>
        </div>

        <div>
          <div>
            <img src='https://i.imgur.com/gwnknXd.png' alt="" />
            <p>Meu ovo</p>
          </div>
          <div>
            <img src='https://i.imgur.com/tBIGWCc.png' alt="" />
            <p>My books</p>
          </div>
          <div>
            <img src='https://i.imgur.com/7N7C9nu.png' alt="" />
            <p>Cafeeee</p>
          </div>
        </div>
      </CommunityList>
    </>
  );
}

export default ListsOfCommunity;
