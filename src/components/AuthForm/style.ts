
import styled from "styled-components";


export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--dark-40);
    border: none;
    border-radius: 1.25rem; 
    height: 37.375rem; 
    width: 24rem;
    img {
        padding-top: 1.25rem;
    }

    @media (max-width: 36rem) { 
        margin-top: 0;
        width: 100%;
        
    }
`;


export const LoginTitle = styled.h1`
    color: var(--brand-color);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 0.5rem;
`;



export const Form = styled.form`
    align-items: flex;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    padding: 1.25rem; 
    width: 24rem; 
    gap: 1rem;

    @media (max-width: 36rem) {
        width: 100%;
    }
`;






