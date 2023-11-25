import { Button } from '../../Button/Button';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';
import { OkForm } from '../Ok-Form/Ok-form';

export function Form({ onCloseForm }) {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [formCompleted, setFormCompleted] = useState(false);

  const toggleSent = () => {
    setSent(!sent);
  };

  const toggleForm = () => {
    onCloseForm();
  };

  const handleInputChange = () => {
    // Verificar si el formulario está completo
    const inputs = form.current.querySelectorAll('input, textarea');
    let isFormCompleted = true;

    inputs.forEach((input) => {
      if (input.value.trim() === '') {
        isFormCompleted = false;
        return;
      }
    });

    setFormCompleted(isFormCompleted);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qfd07k7',
        'template_dt0f5id',
        form.current,
        'ohwstctucOvVQyBqX'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="container-inputs">
          <div className="container-input">
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              name="user_name"
              className="name input"
              placeholder="nombre apellido"
            />
          </div>
          <div className="container-input">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              name="user_email"
              className="email input"
              placeholder="name@email.com"
            />
          </div>
          <div className="container-input">
            <label htmlFor="description">Description</label>
            <textarea
              required
              name="message"
              className="description input"
              cols="30"
              rows="10"
              placeholder="Nos gustaria hablar con ustedes para una colaboracion en el municipio de galapa"
              onChange={handleInputChange}
            />
          </div>
          <div className="div-button__form">
            <Button
              text="Submit"
              type="submit"
              onclick={toggleSent}
              disabled={!formCompleted}
            />
            <Button
              text="Close Form"
              onclick={toggleForm}
            />
          </div>
        </div>
      </form>

      {sent && formCompleted && <OkForm onClose={onCloseForm} />}
    </>
  );
}
