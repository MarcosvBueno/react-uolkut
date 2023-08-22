import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
    emailIsValid?: boolean;
    emailIsInvalid?: boolean;
    passwordIsValid?: boolean;
    passwordIsInvalid?: boolean;
}



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

  p {
    font-size: 0.75rem;
    color: var(--error-color);
  }
    ${props => props.emailIsInvalid && `border: 0.125rem solid var(--error-color);`}
    ${props => props.emailIsValid && `border: 0.125rem solid var(--success-color);`}
    ${props => props.passwordIsInvalid && `border: 0.125rem solid var(--error-color);`}
    ${props => props.passwordIsValid && `border: 0.125rem solid var(--success-color);`}



  @media (max-width: 36rem) {
    margin-top: 0.625rem;
    width: 100%;
    }

`;



export const RememberMeContainer = styled.div`
    color: var(--text-color);
    cursor: pointer;
    display: flex;
    margin-top: 1.25rem; 
    margin-left: 0.625rem; 
    user-select: none;

    @media (max-width: 36rem) {
        margin-left: 0;
    }

`;

export const RememberMeText = styled.span`
    color: #868686;
    font-size: 1rem; 
    font-style: normal;
    font-weight: 400;
    line-height: 1.2rem;
    margin-left: 0.5rem; 
`;



export const CreateAccountButton = styled.button`
    background-color: var(--bg-text);
    border: none;
    border-radius: 0.5rem; 
    color: var(--brand-color);
    cursor: pointer;
    flex-shrink: 0;
    font-size: 1.125rem; 
    font-style: normal;
    font-weight: 500;
    height: 3.1875rem; 
    line-height: normal;
    padding: 0.625rem 1.25rem; 
    width: 100%;
`;

export const CustomCheckboxContainer = styled.div`
    align-items: center;
    color: var(--text-color);
    cursor: pointer;
    display: flex;
    margin-top: 1.25rem; 
    user-select: none;
`;

export const CustomCheckboxInput = styled.input.attrs({ type: "checkbox" })`
    height: 0;
    opacity: 0;
    width: 0;
`;

export const CustomCheckboxLabel = styled.label`
    align-items: center;
    background: var(--bg-text);
    border: 0.0625rem solid #dcdcdc; 
    border-radius: 0.375rem; 
    cursor: pointer;
    height: 1.25rem; 
    left: -0.625rem; 
    margin-right: -0.3125rem;
    position: relative;
    width: 1.25rem;

    &::before {
        background-color: var(--brand-color);
        border-radius: 0.25rem; 
        content: "";
        display: block;
        height: 0.75rem; 
        left: 50%;
        opacity: 0;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0.75rem;
    }

    ${CustomCheckboxInput}:checked + &::before {
        opacity: 1;
        width: 0.875rem;
        height: 0.875rem; 
    }
`;


export const LoginButton = styled.button`
    background-color: var(--brand-color);
    border: none;
    border-radius: 0.5rem;
    color: var(--dark-40);
    cursor: pointer;
    flex-shrink: 0;
    font-size: 1.125rem; 
    font-style: normal;
    font-weight: 500;
    height: 3.1875rem; 
    line-height: normal;
    padding: 0.625rem 1.25rem; 
    width: 100%;

   @media (max-width: 36rem) {
        margin-top: 0.625rem;
      
    }


`;

export const ForgotPasswordLink = styled.a`
    color: var(--brand-color);
    cursor: pointer;
    display: block;
    font-size: 0.875rem; 
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 1.25rem; 
    text-align: center;
    text-decoration-line: underline;
`;