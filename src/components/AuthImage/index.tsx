import React from "react";
import { StyledText, StyledImage } from "./style";

function AuthImage() {
  return (
    <div style={{ position: "relative", width: "800px", height: "598px" }}>
      <StyledImage />
      <StyledText>
        Conecte-se aos seus amigos e familiares usando recados e mensagens instantâneas.
      </StyledText>
    </div>
  );
}

export default AuthImage;
