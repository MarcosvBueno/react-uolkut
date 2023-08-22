import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container } from '../../pages/Register/style';
import logo from "../../assets/img/logo-orkut-simples.svg";

interface Props {
  handleNext: () => void;
}

interface FormData {
  name: string;
  email: string;
  date: string;
  city: string;
  state: string;
  country: string;
  password: string;
  confirmPassword: string;
}

const Step1 = ({ handleNext }: Props) => {
  const initialFormData: FormData = {
    name: '',
    email: '',
    date: '',
    city: '',
    state: '',
    country: '',
    password: '',
    confirmPassword: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const fieldErrorMessages = {
    name: 'O campo de nome precisa ser preenchido',
    email: 'O campo de email precisa ser preenchido e deve ser um endereço de email válido',
    date: 'O campo de data de aniversário precisa ser preenchido',
    city: 'O campo de cidade precisa ser preenchido',
    state: 'O campo de estado precisa ser preenchido',
    country: 'O campo de país precisa ser preenchido',
    password: 'A senha precisa ser preenchida e deve ter pelo menos 6 caracteres',
    confirmPassword: 'As senhas não coincidem',
  };

//The handleChange function is called whenever the user types into any of the form's input fields. It updates the formData state through the setFormData hook, scattering the existing values ​​and updating the field specified by the name attribute with the value entered by the user.

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    // Check for empty fields
    for (const field in formData) {
      if (formData[field as keyof FormData].trim() === '') {
        errors[field] = fieldErrorMessages[field as keyof FormData];
      }
    }

    // Check for email validation
    if (formData.email.trim() !== '') {
      if (!formData.email.includes('@')) {
        errors.email = 'Endereço de email inválido';
      }
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'As senhas não coincidem';
    }

    // Check password length
    if (formData.password.trim() !== '') {
      if (formData.password.length < 6) {
        errors.password = 'A senha deve ter pelo menos 6 caracteres';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  //It prevents the default form submission behavior using e.preventDefault
  //Calls the 'validateForm' function to check the form for errors. If there are validation errors, it records a message and returns, preventing the submission of the form.
  //If there are no validation errors, its logs a success message, resets the 'formData' state to initial values ​​and calls the 'handleNext' function.

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log('Form validation failed.');
      return;
    }

    console.log('Form submitted successfully.');
    setFormData(initialFormData);
    handleNext();
  };

  return (
    <Container onSubmit={handleSubmit}>
      <img src={logo} alt="Logo" />
      <h2>Acesse o orkut</h2>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
      />
      {formErrors.name && <span>{formErrors.name}</span>}
      <input
        type="text"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
      />
      {formErrors.email && <span>{formErrors.email}</span>}
      <input
        type="date"
        name="date"
        placeholder="Data de aniversário"
        value={formData.date}
        onChange={handleChange}
      />
      {formErrors.date && <span>{formErrors.date}</span>}
      <input
        type="text"
        name="city"
        placeholder="Cidade"
        value={formData.city}
        onChange={handleChange}
      />
      {formErrors.city && <span>{formErrors.city}</span>}
      <input
        type="text"
        name="state"
        placeholder="Estado"
        value={formData.state}
        onChange={handleChange}
      />
      {formErrors.state && <span>{formErrors.state}</span>}
      <input
        type="text"
        name="country"
        placeholder="País"
        value={formData.country}
        onChange={handleChange}
      />
      {formErrors.country && <span>{formErrors.country}</span>}
      <input
        type="password"
        name="password"
        placeholder="Senha"
        value={formData.password}
        onChange={handleChange}
      />
      {formErrors.password && <span>{formErrors.password}</span>}
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirme Senha"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {formErrors.confirmPassword && <span>{formErrors.confirmPassword}</span>}
      <button type="submit">Criar conta</button>
    </Container>
  );
};

export default Step1;
