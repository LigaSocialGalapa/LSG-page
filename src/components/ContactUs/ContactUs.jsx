import { useState } from 'react';
import './ContactUs.css';
import { Form } from './form/Form';
import { Button } from '../Button/Button';

export function ContactMe() {
  const [formActive, setFormActive] = useState(true);
  const handleToggle = () => {
    setFormActive(!formActive);
  };
  const toggleForm = () => {
    handleToggle();
  };
  return (
    <section id="Contact-me">
      <h2 className="title-proyects">Contacto</h2>
      <div className="container-contact-us">
        <div className="container-info">
          <p>
            Correo electrónico:{' '}
            <a href="liderestransformadoresgalapa@gmail.com">
              liderestransformadoresgalapa@gmail.com
            </a>
          </p>
          <p>Dirección: Galapa, Atlantico, Colombia</p>
          <p>
            Facebook:{' '}
            <a href="https://www.facebook.com/liderestransformadores.degalapa/">
              liderestransformadores.degalapa
            </a>
          </p>
          <p>
            Instagram:{' '}
            <a href="https://www.instagram.com/ligasocialgalapa/">
              ligasocialgalapa
            </a>
          </p>
        </div>
        {formActive ? (
          <Button
            text="Envianos un mensaje"
            onclick={handleToggle}
            type="button"
          />
        ) : (
          <Form onCloseForm={toggleForm} />
        )}
      </div>
    </section>
  );
}
