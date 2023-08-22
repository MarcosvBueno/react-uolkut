import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.25rem;

  > div {
    background-color: var(--dark-30);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.625rem; 
    padding: 2.5rem; 
    gap: 1.5rem; 
  }

  button {
    background-color: var(--brand-color);
    color: var(--dark-40);
    border: none;
    border-radius: 0.625rem; 
    padding: 0.625rem 1.25rem; 
    font-size: 1rem; 
    font-weight: bold;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    a {
      color: var(--dark-40);
      text-decoration: none;
    }
  }
`;

    
