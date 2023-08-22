import styled from "styled-components";

export const CommunityList = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--dark-30);
  border-radius: 1rem;
  padding: 1.5rem;
  gap: 1.5rem;

  h3 {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    color: var(--dark-10);
  }

  button {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    color: var(--brand-color);
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    scale: 1.1;
  }

  > div {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center; 
  }
  
  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.75rem;
  }

  :nth-child(1) {
    margin-bottom: 0.25rem;
  }

  @media (max-width: 60.5rem) {
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 1.875rem;
    
    h3 {
      font-size: 1.25rem;
    }

    button{
      font-size: 1.125rem;
    }
  }

  @media (max-width: 35rem) {
    width: 100%;
    justify-content: center;
    margin: 0 auto;
      
    h3 {
      font-size: 1rem;
    }

    button {
      font-size: 1.125rem;
    }
  }

`;
