

import { styled } from "styled-components";



export const Container = styled.form`
  max-width: 34.375rem; 
  margin: 3.5rem auto; 
  padding: 1.25rem; 
  border-radius: 1rem; 
  background-color: var(--dark-30);
  display: flex;
  flex-direction: column;
  align-items: center;

  

  h2 {
  
    font-size: 1.5rem; 
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0;
    text-align: center;
    color: var(--brand-color);

    margin-bottom: 3.3125rem;
  }

  label {

    font-size: 1rem; 
    color: var(--brand-color);
  }

  img {
    width: 2rem; 
    height: 2rem; 
    margin-bottom: 1.5rem; 
    margin-top: 2rem; 
  }

  input,
  select {
    display: block;
    width: 100%;
    height: 3.1875rem;
    padding: 0.625rem; 
    margin-bottom: 0.625rem; 
    border: 1px solid #ccc;
    border-radius: 0.3125rem; 
    background-color: #EFF3F8;
    padding-left: 0.9375rem;
    padding-right: 0.9375rem; 
  }

  input:not(:last-child),
  select:not(:last-child) {
    margin-bottom: 0.9375rem; 
  }

  span {

    font-size: 0.975rem; 
    font-weight: 400;
    line-height: 1.5rem; 
    letter-spacing: 0px;
    color: var(--error-color);
  }


  button {
    display: block;
    width: 100%;
    height: 3.1875rem;
    padding: 0.625rem; 
    font-size: 1.125rem;
    background-color: var(--brand-color);
    color: #EFF3F8;
    border: none;
    border-radius: 0.3125rem;
    cursor: pointer;

    margin-top: 0.625rem; 

    &:hover {
      background-color: #EFF3F8;
      color: var(--brand-color);
    }
  }

  .btn-back {
    background-color: #EFF3F8;
    color: var(--brand-color);

    &:hover {
      background-color: var(--brand-color);
      color: #EFF3F8;
    }
  }

  
  @media (max-width: 768px) {
    width: 90%;
 
    margin: 1.5rem auto;
    padding: 0.625rem;

  
    margin-top: 2rem;

    h2 {
      font-size: 1.25rem; 
      margin-bottom: 2.5rem; 
    }

    img {
      width: 1.5rem; 
      height: 1.5rem; 
      margin-bottom: 1rem; 
      margin-top: 1.5rem; 
    }

    input,
    select {
      height: 2.75rem;
      font-size: 1rem; 
    }

    button {
      height: 2.75rem; 
      font-size: 1rem; 
    }
  } } 
  `;

 
 