import styled from "styled-components";

export const Container = styled.main`
  margin: 0 1rem; 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem; 
  margin-top: 5rem; 
  margin-bottom: 3.375rem;

  @media (max-width: 48rem) { 
    flex-direction: column;
  }
`;

export const ProfileSide = styled.div`
  @media (max-width: 48rem) { 
    width: 100%;
  }
`;

