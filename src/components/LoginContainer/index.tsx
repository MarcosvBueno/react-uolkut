import React from "react";
import LoginBackground from '../../components/LoginBackground';
import LoginForm from "../../components/LoginForm";
import { StyledContainer } from "./style";

function LoginContainer() {
  return (
    <StyledContainer>
      <LoginBackground />
      <LoginForm />
    </StyledContainer>
  );
}

export default LoginContainer;
