import styled from 'styled-components'; 

export const Container = styled.main`
  max-width: 75.9375rem;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 5rem;
  margin-bottom: 1.25rem;
  display: grid;
  grid-template-columns: 17.5rem 1fr 17.5rem;
  grid-template-rows: auto auto 1fr auto;
  grid-gap: 2rem;
  
  & .profileHeaderDiv{
    grid-row: 1 ; 
  }

  & .ProfileInfoDiv {
    grid-row: 1 / 3;
  }

  & .ListFriendsDiv {
    grid-row: 1 ;
    
  }

  & .ListCommunityDiv {
    grid-row: 2 ;
    grid-column: 3; 
  }

  @media (max-width: 64rem) {
    grid-template-columns: 17.5rem 1fr 1fr; 
  }

  @media (max-width: 60.5rem) {
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr; 
    grid-template-rows: auto; 
    padding: 0 1.5rem;

    & .inputDiv{
      grid-row: 1;
    }

    & .profileHeaderDiv{
      grid-row: 2;
    }

    & .ProfileInfoDiv {
      grid-row: 4;
    }

    & .ListFriendsDiv {
      grid-row: 3;
      grid-column: 1;
    }

    & .ListCommunityDiv {
      grid-row: 5;
      grid-column: 1; 
    }
  }

  @media (max-width: 48rem) {
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
    margin-top: 3.75rem;
    margin-bottom: 3rem;

    & .profileHeaderDiv {
      margin: 0 auto;
      width: 100%;    
    }
  }

  @media (max-width: 35rem) {
    margin-bottom: 3.375rem;

    & .profileHeaderDiv {
      width: 100%;
    }
  }
`;

export const InputContainer = styled.div`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  position: relative; 
  margin-bottom: 0.9375rem;

  input{
    width: 20rem;
    height: 2.75rem;
    border-radius: 0.5rem;
    background: var(--dark-30);
    padding: 0 2.8125rem;
    border: none;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }

  img{
    width: 1.35225rem;
    height: 1.5rem;
    position: absolute;
    left: 0.8125rem;
  }

  @media (max-width: 48rem) {
    display: flex;
    padding: 0 0.3125rem;

    input{
      width: 100%;
    }

    img{
      left: 0.8125rem;
    }
  }

  @media (max-width: 35rem) {
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    padding: 0 0.3125rem;
  }
`;