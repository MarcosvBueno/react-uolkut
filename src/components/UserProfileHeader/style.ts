import styled from "styled-components";

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; 
  width: 100%;

  > button {
    width: 100%;
    height: 3.5rem; 
    border-radius: 1rem; 
    border: none;
    color: var(--brand-color);
    background-color: var(--dark-30);
    font-size: 1.125rem; 
    font-style: normal;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    background-color: var(--brand-color);
    color: var(--dark-30);
    transform: scale(1.030);
  }

  @media (max-width: 60.5rem) {
    justify-content: center;
    align-items: center;

    > button {
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem; 

      @media (max-width: 48rem) {
        width: 100%;
      }
    }
  }
`;

export const UserProfile = styled.div`
  width: 17.5rem; 
  height: 20.25rem; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--dark-30);
  border-radius: 1rem; 
  color: var(--dark-10);
  gap: 1.5rem; 

  > img {
    width: 10.625rem; 
    height: 10.625rem;
    border-radius: 6.25rem;
    border: 0.1875rem solid var(--brand-color); 
    padding: 0.3125rem; 
  }

  > h2 {
    font-size: 2rem; 
    font-style: normal;
    font-weight: 500;
  }

  > p {
    font-size: 1.125rem; 
    font-style: normal;
    font-weight: 400;
  }

  @media (max-width: 60.5rem) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 48rem) {
    width: 100%;

    > h2 {
      font-size: 2rem;
    }

    > p {
      font-size: 1.25rem; 
    }
  }
`;

