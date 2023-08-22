import {Outlet} from 'react-router-dom'
import { GlobalStyle } from './style/global';
import Header from './components/Header';
import Footer from './components/Footer/footer';
import { UserProvider } from './context/user-context';



function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </UserProvider>
  
  );
}

export default App;
