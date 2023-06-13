import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(31, 31, 31, 0.35);
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

export const LoadingCircle = styled.span`
  top: calc(50% - 34px);
  left: calc(50% - 34px);
  position: fixed;
`

export const LoadingPercentage = styled.span`
  top: calc(50% - 34px);
  left: calc(50% - 34px);
  position: fixed;
`

export const LoadingRotate = styled.span`
  top: calc(50% - 34px);
  left: calc(50% - 34px);
  position: fixed;
  z-index: 10;

  & > svg {
    animation: lds-dual-ring 1.2s linear infinite;
    animation-name: ${breatheAnimation};
  }
`
