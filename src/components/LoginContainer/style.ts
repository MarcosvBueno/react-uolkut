import styled from "styled-components";

const StyledContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 90vh;
    justify-content: center;
    min-width: 20rem;
    width: 100%;

    & > * {
        margin-right: 1.875rem; 
    }

    & > *:last-child {
        margin-right: 0;
    }

    @media (max-width: 36rem) { 
        align-items: center;
        flex-direction: column;

        & > * {
            margin-right: 0;
            margin-top: 1.25rem; 
        }

        & > *:first-child {
            display: none;
        }
    }

    @media (min-width: 36.0625rem) and (max-width: 48rem) { 
        align-items: center;
        flex-direction: row;

        & > * {
            margin-right: 0.625rem; 
            margin-top: 0;
        }

        & > *:first-child {
            display: flex;
        }
    }

    @media (min-width: 48.0625rem) { 
        align-items: center;
        flex-direction: row;

        & > * {
            margin-right: 1.25rem; 
            margin-top: 0;
        }
    }
`;

export { StyledContainer };
