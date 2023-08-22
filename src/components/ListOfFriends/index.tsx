import {  FriendList} from './style';
import profileImage from '../../assets/img/profile-image.png';
function ListsOfFriends() {
  return (
    <>
      <FriendList>
        <div>
          <h3>Amigos (248)</h3>
          <button>Ver todos</button>
        </div>

        <div>
          <div>
            <img src='https://i.imgur.com/g00WRng.png' alt="" />
            <p>Fernando</p>
          </div>
          <div>
            <img src='https://i.imgur.com/smEE1fr.png' alt="" />
            <p>Ana</p>
          </div>
          <div>
            <img src='https://i.imgur.com/zGWdEfN.png' alt="" />
            <p>Carlos</p>
          </div>
        </div>

        <div>
          <div>
            <img src='https://i.imgur.com/NCNMWMq.png' alt="" />
            <p>Vitor</p>
          </div>
          <div>
            <img src='https://i.imgur.com/OZzAEqY.png' alt="" />
            <p>Matheus</p>
          </div>
          <div>
            <img src='https://i.imgur.com/rZ8fCOP.png' alt="" />
            <p>Ramos</p>
          </div>
        </div>

        <div>
          <div>
            <img src='https://i.imgur.com/iXETVnZ.png' alt="" />
            <p>Eiji</p>
          </div>
          <div>
            <img src='https://i.imgur.com/AFJ9Uhs.png' alt="" />
            <p>Julia</p>
          </div>
          <div>
            <img src='https://i.imgur.com/NrsHF8b.png' alt="" />
            <p>Carol</p>
          </div>
        </div>
      </FriendList>

      
    </>
  );
}

export default ListsOfFriends;
