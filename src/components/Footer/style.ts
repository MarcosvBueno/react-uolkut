import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--dark-30);
  padding: 10px;
  text-align: center;
  width: 100%;
  min-height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: var(--brand-color);
    font-size: 1.125rem;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 0.875rem;
    }
  }
`;