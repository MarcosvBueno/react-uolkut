import styled from "styled-components";
import background_image from "../../assets/img/login-background.svg";

const StyledImage = styled.div`
    border-radius: 2rem; 
    height: 37.375rem; 
    overflow: hidden;
    position: relative;
    width: 100%;

    &::after {
        background-image: linear-gradient(171deg, rgba(20, 20, 20, 0) 0%, #141414 100%), url(${background_image});
        background-size: cover;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    & img {
        display: none;
    }
`;

const StyledText = styled.h1`
    bottom: 1.25rem; 
    color: var(--bg-text);
    font-size: 1.5rem; 
    left: 1.25rem; 
    position: absolute;
`;

export { StyledImage, StyledText };
