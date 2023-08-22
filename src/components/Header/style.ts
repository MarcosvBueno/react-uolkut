import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: var(--dark-30);
  height: 5.75rem; 
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 120rem; 

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 78rem; 
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem; 

    @media (max-width: 48rem) { 
      justify-content: center;
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2.5rem; 

    a {
      color: var(--dark-10);
      font-size: 1rem; 
      font-style: normal;
      font-weight: 400;
      text-decoration: none;
    }

    @media (max-width: 48rem) { 
      display: none;
    }
  }
`;

export const HeaderLogin = styled.div`
  width: 100%;
  background-color: var(--dark-30);
  height: 5.75rem; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120rem; 

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 78rem;
    width: 100%;
    margin: 0 auto;
    gap: 7.5rem; 
    padding: 0 1.5rem; 
  }

  @media (max-width: 60rem) {
    > div {
      gap: 1.5rem; 
      width: 100%;
      padding: 0 1.5rem; 
    }
  }

  @media (max-width: 48rem) { 
    > div {
      display: flex;
      padding: 0 1.5rem; 
      width: 100%;
    }
  }
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem; 
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 2.5rem; 
  }

  li {
    list-style: none;
    font-size: 1rem; 
    font-style: normal;
    font-weight: 400;
    text-decoration: none;

    a {
      text-decoration: none;
      cursor: pointer;
      color: var(--dark-10);
      font-style: normal;
      font-weight: 600;
    }

    &.profile-link a {
      color: var(--brand-color);
    }
  }

  @media (max-width: 60rem) {
    width: 100%;
    gap: 3rem; 

    > nav {
      margin: 0 auto;
    }

    ul {
      width: 100%;
      gap: 3.125rem;
    }
  }

  @media (max-width: 48rem) {
    nav {
      display: none;
    }
  }
`;


export const ContainerInputWUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 2.5rem; 
  max-width: 120rem; 
`;

export const InputContent = styled.div`
  display: flex;
  justify-content: flex;
  align-items: center;
  width: 100%;
  position: relative;
  max-width: 120rem;

  input {
    width: 100%;
    height: 2.748rem; 
    border-radius: 0.5rem; 
    border: none;
    background-color: var(--bg-text);
    padding: 0 3.188rem; 
    font-size: 0.875rem; 
    font-style: normal;
    font-weight: 400;
  }

  img {
    width: 1.5rem; 
    height: 1.499rem; 
    position: absolute;
    left: 1rem; 
  }

  @media (max-width: 60rem) { 
    input {
      display: none;
    }

    img {
      left: 1.25rem; 
    }
  }

  @media (max-width: 48rem) {
    display: none;
  }
`;

export const PerfilContent = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem; 
  max-width: 120rem; 

  img {
    width: 2.5rem; 
    height: 2.5rem; 
    border-radius: 5rem; 

    &:nth-of-type(2) {
      width: 1.5rem; 
      height: 1.5rem; 
    }
  }

  p {
    font-size: 1rem; 
    font-style: normal;
    font-weight: 500;
  }

  @media (max-width: 60rem) { 
    width: 100%;
    justify-content: flex-end;
    gap: 0.875rem; 
  }

  @media (max-width: 48rem) { 
    justify-content: flex-end;

    p {
      display: none;
    }
  }
`;
