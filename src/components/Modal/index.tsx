import LogoOrkut from '../../assets/img/logo-orkut-simples.svg';
import { Container } from './style';

interface ModalProps {
  imageLogo : string;
  text: string;
  buttonContent: string;
  buttonFunction?: () => void;

} 


const Modal: React.FC<ModalProps> = ({imageLogo, text, buttonContent, buttonFunction}) => {
  return (
    <Container >
      <div>
      <img src={LogoOrkut} alt="" />
      <h2>{text}</h2>
      <button onClick={buttonFunction}>
        {buttonContent}
      </button>
      </div>
    </Container>
  );
}

export default Modal;