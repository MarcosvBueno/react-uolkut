import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  professionIsValid?: boolean;
  professionIsInvalid?: boolean;
  cityIsValid?: boolean;
  cityIsInvalid?: boolean;
  countryIsValid?: boolean;
  countryIsInvalid?: boolean;
  passwordIsValid?: boolean;
  passwordIsInvalid?: boolean;
  passwordConfirmationIsValid?: boolean;
  passwordConfirmationIsInvalid?: boolean;
  birthDateIsValid?: boolean;
  birthDateIsInvalid?: boolean;
  nameIsValid?: boolean;
  nameIsInvalid?: boolean;

}


export const EditFormContainer = styled.div`
  width: 37rem; 
  height: 53.375rem;
  background: var(--dark-30);
  border-radius: 1rem; 
  display: flex;
  flex-direction: column;
  gap: 1rem; 
  padding: 1.5rem;
  
  

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5.75rem;
    justify-content: center;
    align-items: center;

    > h1 {
    color: var(--brand-color);
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.3333rem;
    letter-spacing: 0.1667rem;
    text-align: left;
    }
  }

  button {
    width:21rem;
    height: 3.1875rem;
    border-radius: 0.5rem;
    background: var(--brand-color);
    border: none;
    color: #fff;
    cursor: pointer;

  }
 

  @media (max-width: 48rem) {
    width: 100%; 

    > div {
      gap: 2rem;
    }

    button {
      width: 100%;
    }
  }


`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 6.625rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    height: 100%;
  }

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
    left: 9.5rem;
    bottom: 3.3rem;
  };


  @media (max-width: 48rem) {
    gap: 3rem;

    select {
      width: 100%;
    }
  }

  @media (max-width: 28.75rem) {
    flex-direction: column;
  }
`;

export const Input = styled.input<StyledInputProps>`
  width: 13.4375rem; 
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


  ${props => props.professionIsValid && `border: 0.125rem solid var(--success-color)`};
  ${props => props.professionIsInvalid && `border: 0.125rem solid var(--error-color)`};

  ${props => props.cityIsValid && `border: 0.125rem solid var(--success-color)`};
  ${props => props.cityIsInvalid && `border: 0.125rem solid var(--error-color)`};

  ${props => props.countryIsValid && `border: 0.125rem solid var(--success-color)`};
  ${props => props.countryIsInvalid && `border: 0.125rem solid var(--error-color)`};

  ${props => props.passwordIsValid && `border: 0.125rem solid var(--success-color)`};
  ${props => props.passwordIsInvalid && `border: 0.125rem solid var(--error-color)`};

  ${props => props.passwordConfirmationIsValid && `border: 0.125rem solid var(--success-color)`};
  ${props => props.passwordConfirmationIsInvalid && `border: 0.125rem solid var(--error-color)`};

  ${props => props.birthDateIsValid && `border: 0.125rem solid var(--success-color)`};
  ${props => props.birthDateIsInvalid && `border: 0.125rem solid var(--error-color)`};

  ${props => props.nameIsValid && `border: 0.125rem solid var(--success-color)`};
  ${props => props.nameIsInvalid && `border: 0.125rem solid var(--error-color)`};

  @media (max-width: 48rem) {
    width: 100%; 
  }
`;
