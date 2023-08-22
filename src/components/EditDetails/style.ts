import styled from "styled-components";

export const Details = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; 
  justify-content: center;
  align-items: left;
  @media (max-width: 48rem) {
    width: 100%; 
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem; 
  }

  h2 {
    color: var(--dark-20);
    font-size: 1rem; 
    font-style: normal;
    font-weight: 400;
  }

  p {
    color: var(--dark-10);
    font-size: 1rem; 
    font-style: normal;
    font-weight: 400;
    border-radius: 1.875rem; 
    border: 0.0625rem solid var(--brand-color); 
    padding: 0.125rem 1rem;
    transition: all 0.2s ease-in-out;
  }

  p:hover {
    background-color: var(--brand-color);
    color: var(--dark-40);
  }

  button {
    border: none;
    background: none;
    font-size: 0.875rem; 
    font-style: normal;
    font-weight: 500;
    color: var(--brand-color);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    transform: scale(1.1);
  }
`;

export const ParagraphHiddenInMobile = styled.p`
  @media (max-width: 48rem) {
    display: none; 
  }
`;

