import React from "react";
import styled from "styled-components";

const LoadingSpinner = () => {
    return (
        <SpinnerContainer>
            <Spinner></Spinner>
        </SpinnerContainer>
    );
};

const SpinnerContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    height: 350px;
`;

const Spinner = styled.div`
    width: 70px;
    height: 70px;
    border: 7px solid #f3f3f3;
    border-top: 7px solid #a2c7ce;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default LoadingSpinner;
