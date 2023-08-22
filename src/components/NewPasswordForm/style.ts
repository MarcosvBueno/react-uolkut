import { InputHTMLAttributes } from "react";
import styled from "styled-components";


interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
    sendCodeIsValid?: boolean;
    sendCodeIsInvalid?: boolean;
    passwordIsValid?: boolean;
    passwordIsInvalid?: boolean;
    confirmPasswordIsValid?: boolean;
    confirmPasswordIsInvalid?: boolean;
}

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-40);
    border: none; 
    gap: 1.25rem;
    margin-bottom: 2rem;

    


`;

export const Input = styled.input<StyledInputProps>`
  width: 100%; 
  height: 3.1875rem; 
  background: var(--bg-text);
  border: none;
  border-radius: 0.5rem;
  padding: 0 0.75rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  color: #868686;

  &:focus {
    outline: none;
  }


  ${props => props.sendCodeIsInvalid && `border: 0.125rem solid var(--error-color);`}
  ${props => props.sendCodeIsValid && `border: 0.125rem solid var(--success-color);`}

  ${props => props.passwordIsInvalid && `border: 0.125rem solid var(--error-color);`}
  ${props => props.passwordIsValid && `border: 0.125rem solid var(--success-color);`}

  ${props => props.confirmPasswordIsInvalid && `border: 0.125rem solid var(--error-color);`}
  ${props => props.confirmPasswordIsValid && `border: 0.125rem solid var(--success-color);`}

  @media (max-width: 48rem) {
    width: 100%; 
  }
`;