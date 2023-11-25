import { Button } from './components/Button/Button';
import './App.css';
import { Header } from './components/Header/Header';
import { QuienesSomos } from './components/QuienesSomos/QuienesSomos';
import { Eventos } from './components/Eventos/Eventos';
import { ContactMe } from './components/ContactUs/ContactUs';

function App() {
  return (
    <>
      <div className="header"></div>
      <Header />
      <QuienesSomos />
      <Eventos />
      <ContactMe />
    </>
  );
}

export default App;
