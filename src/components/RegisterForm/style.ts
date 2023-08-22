import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';


interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
    emailIsValid?: boolean;
    emailIsInvalid?: boolean;
    passwordIsValid?: boolean;
    passwordIsInvalid?: boolean;
    birthdayDateIsValid?: boolean;
    birthdayDateIsInvalid?: boolean;
    countryIsValid?: boolean;
    countryIsInvalid?: boolean;
    stateIsValid?: boolean;
    stateIsInvalid?: boolean;
    cityIsValid?: boolean;
    cityIsInvalid?: boolean;
    professionIsValid?: boolean;
    professionIsInvalid?: boolean;
    

}

export const FormContainerRegister = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.6rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

    @media (max-width: 36rem) {
        div > input {
            width: 100%;
        }
        
    }
`;

export const SelectContainer = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: flex-end;
  

  select{
  width: 11.3125rem;
  height: 2.1875rem;
    background: var(--bg-text);
    color: #868686;
    border: none;
    border-radius: 0.5rem;
    padding: 0 0.75rem;
    font-size: 1rem;
    font-style: normal;
    appearance: none;
  }

  img{
    width: 1.4rem;
    height: 1.4rem;
    position: relative;
    right: 1rem;

    bottom: 1.8rem;
  };
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

  ${props => props.emailIsInvalid && `border: 0.125rem solid var(--error-color);`}
  ${props => props.emailIsValid && `border: 0.125rem solid var(--success-color);`}
  ${props => props.passwordIsInvalid && `border: 0.125rem solid var(--error-color);`}
  ${props => props.passwordIsValid && `border: 0.125rem solid var(--success-color);`}
  ${props => props.birthdayDateIsInvalid && `border: 0.125rem solid var(--error-color);`}
  ${props => props.birthdayDateIsValid && `border: 0.125rem solid var(--success-color);`}
  ${props => props.countryIsInvalid && `border: 0.125rem solid var(--error-color);`}
  ${props => props.countryIsValid && `border: 0.125rem solid var(--success-color);`}
  ${props => props.stateIsInvalid && `border: 0.125rem solid var(--error-color);`}
  ${props => props.stateIsValid && `border: 0.125rem solid var(--success-color);`}
  ${props => props.cityIsInvalid && `border: 0.125rem solid var(--error-color);`}
  ${props => props.cityIsValid && `border: 0.125rem solid var(--success-color);`}
  ${props => props.professionIsInvalid && `border: 0.125rem solid var(--error-color);`}
  ${props => props.professionIsValid && `border: 0.125rem solid var(--success-color);`}
  ${props => props.professionIsInvalid && `border: 0.125rem solid var(--error-color);`}
  ${props => props.professionIsValid && `border: 0.125rem solid var(--success-color);`}
    

  @media (max-width: 48rem) {
    width: 100%; 
  }
`;