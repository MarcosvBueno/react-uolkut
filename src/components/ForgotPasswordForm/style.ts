import { InputHTMLAttributes } from "react";
import styled from "styled-components";


interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
    emailIsValid?: boolean;
    emailIsInvalid?: boolean;
  
}

export const ForgotPasswordFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10.25rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.25rem;
        width: 100% 
    }

    > div:first-child {
        margin-top: 1rem;
        gap: 2  .625rem;
    }


`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  button:first-child {
    background-color: transparent;
    border: none;
    color: var(--brand-color);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }

  button:last-child {
    background-color: var(--bg-text);
    border: none;
    border-radius: 0.5rem;
    color: var(--brand-color);
    cursor: pointer;
    flex-shrink: 0;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    height: 3.1875rem;
    line-height: normal;
    padding: 0.625rem 1.25rem;
    width: 100%;
  }



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

  ${(props) => props.emailIsInvalid && `border: 0.125rem solid var(--error-color);`}
  ${(props) => props.emailIsValid && `border: 0.125rem solid var(--success-color);`}

  @media (max-width: 48rem) {
    width: 100%; 
  }
`;