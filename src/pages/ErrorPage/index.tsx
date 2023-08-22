import gifError from '../../assets/img/404 error with person looking for.gif';
import { Container } from './style';
function ErrorPage() {
  return ( 
    <Container>
      <img src={gifError} alt="" />       
      <button><a href='/profile'>Voltar</a></button>
    </Container>
   );
}

export default ErrorPage;