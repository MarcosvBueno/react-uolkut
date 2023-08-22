import React from "react";
import AuthImage from '../AuthImage';
import AuthForm from "../AuthForm";
import { StyledContainer } from "./style";

function AuthContainer() {
  return (
    <StyledContainer>
      <AuthImage />
      <AuthForm />
    </StyledContainer>
  );
}

export default AuthContainer;
