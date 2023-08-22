import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  height: 90vh;

  img {
    max-width: 50rem;
    width: 100%;
  }

  button {
    width: 100%;
    max-width: 18.75rem;
    padding: 0.8rem 2.5rem;
    border-radius: 0.3rem;
    border: none;
    background-color: #37474F;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: 1.2rem;

    &:hover {
      background-color: #ED2590;
      color: #000;
    }

    a{
      color: #fff;
      text-decoration: none;  
    }
  }
`;


