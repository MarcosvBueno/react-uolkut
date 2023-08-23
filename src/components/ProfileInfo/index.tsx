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
function ProfileInfo() {
  return (
    <>
      <ProfileInfoSection>
        <h2>Boa tarde, Iuri Silva</h2>
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
            <p>Solteiro</p>
          </div>
          <div>
            <h3>Aniversário:</h3>
            <p>21 de julho</p>
          </div>
          <div>
            <h3>Idade:</h3>
            <p>22</p>
          </div>
          <div>
            <h3>Interesses no Orkut:</h3>
            <p>Solteiro</p>
          </div>
          <div>
            <h3>Quem sou eu:</h3>
            <p>Programador</p>
          </div>
          <div>
            <h3>Moro:</h3>
            <p>Guarantã</p>
          </div>
          <div>
            <h3>País:</h3>
            <p>Brasil</p>
          </div>
          <div>
            <h3>Cidade</h3>
            <p>São Paulo</p>
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
    </>
  );
}

export default ProfileInfo;
