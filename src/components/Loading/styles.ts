import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.7;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
`

const breatheAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Loading = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
    position: fixed;

    &:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
        animation-name: ${breatheAnimation}
    }
`;
