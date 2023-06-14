import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline & > svg {
    cursor: pointer;
  }
  cursor: pointer;
`

export const Body = styled.div`
  display: flex;
  height: auto;
  margin-bottom: 17px;
  z-index: 2;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease-out;
  max-height: 0px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
  }

  &.active {
    max-height: 1000px;
  }
`

export const IconContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
`

export const Icon = styled.div`
  width: 2px;
  height: 24px;
  background-color: #1f1f1f;
  border-radius: 2px;
  position: absolute;
  transition: all 0.2s ease-in-out;

  &.active {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
  }
`

export const IconHorizontal = styled.div`
  width: 24px;
  height: 2px;
  background-color: #1f1f1f;
  border-radius: 2px;
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  width: 100%;
`

export const Separator = styled.div`
  height: 1px;
  background: #b0b0b1;
  border-radius: 2px;
  margin-bottom: 53px;
  margin-top: 13px;
`
