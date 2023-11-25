import './App.css';
import { Header } from './components/Header/Header';
import { QuienesSomos } from './components/QuienesSomos/QuienesSomos';
import { Eventos } from './components/Eventos/Eventos';
import { ContactMe } from './components/ContactUs/ContactUs';
import { Comunicaciones } from './components/Comunicaciones/Comunicaciones';
import React, { useState } from 'react';

function App() {
  const [showAll, setShowAll] = useState(true);

  return (
    <>
      <div className="header"></div>
      <Header
        showAll={showAll}
        setShowAll={setShowAll}
      />
      {showAll ? (
        <>
          <QuienesSomos />
          <Eventos />
          <ContactMe />
        </>
      ) : (
        <Comunicaciones />
      )}
    </>
  );
}
export default App;
