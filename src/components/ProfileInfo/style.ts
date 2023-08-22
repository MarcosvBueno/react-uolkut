import styled from "styled-components";

export const ProfileInfoSection = styled.section`
  width: 100%;

  border-radius: 1rem;
  background: var(--dark-30);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 500;
    color: var(--dark-10);
  }

  @media (max-width: 60.5rem) {
    margin-bottom: 1rem; 
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 35rem) {
      width: 100%;
      height: 100%;
      justify-content: center;
      margin: 0 auto;
      
      > h2{
        font-size: 1.25rem;
      }   
  }
`;

export const Triangle = styled.div`
  position: absolute;
  left: 38%; 
  top: 15.125rem;
  transform: translateX(-50%);
  border-left: 0.625rem solid transparent;
  border-right: 0.625rem solid transparent;
  border-bottom: 0.625rem solid var(--bg-text); 

  @media (max-width: 60.5rem) {
    display: none;
  }
`;

export const PhraseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 1.5rem;
  border-radius: 0.625rem;
  background: var(--bg-text);
  width: 100%;
  height: 2.5rem;
  padding: 0.75rem;

  > p {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--dark-10);
    padding: 0.75rem;
  }

  @media (max-width: 35rem) {
      width: 100%;
      margin-bottom: 2.5rem;
      margin-top: 2rem;

      > p {
        font-size: 0.75rem;
      }
  }
`;

export const QualitiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;
  margin-top: 2rem;
  width: 70%;
  margin-bottom: 2rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.375rem;
  }

  img:hover{
    cursor: pointer;
    scale: 1.1;
  }

  h3{
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    color: var(--dark-10);
    margin-bottom: 0.5rem;
  }

  @media (max-width: 35rem) {
      width: 100%;
      justify-content: space-between;
      margin: 0 auto;
      margin-bottom: 2.5rem;

      img {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.375rem;
      }

      h3{
        font-size: 1rem;
      }
  }
`;

export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;

  > p{
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    color: var(--dark-10);
  }

  @media (max-width: 36.875rem) {
    gap: 0;
  }
`;

export const PersonalInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }

  h3{
    color: var(--dark-20);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }

  p{
    color: var(--dark-10);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }
`;

export const UserInterests=  styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: left;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  h3{
    color: var(--dark-20);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }

  p{
    color: var(--dark-10);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    border-radius: 1.875rem;
    border: 1px solid var(--brand-color);
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
    transition:  all 0.2s ease-in-out;
  }

  button:hover {
    scale: 1.1;
  }

  @media (max-width: 36.875rem) {
    width: 100%;

    div p:nth-child(n+3) {
      display: none;
    }
  }
`;

