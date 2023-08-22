import LogoOrkut from '../../assets/img/logo-orkut-simples.svg';
import { Container } from './style';

interface ModalProps {
  imageLogo : string;
  text: string;
  buttonContent: string;
  buttonLink: string;

} 


const Modal: React.FC<ModalProps> = ({imageLogo, text, buttonContent, buttonLink}) => {
  return (
    <Container >
      <div>
      <img src={LogoOrkut} alt="" />
      <h2>{text}</h2>
      <button>
        <a href={buttonLink}>{buttonContent}</a>
      </button>
      </div>
    </Container>
  );
}

export default Modal;