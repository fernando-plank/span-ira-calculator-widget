import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline & > svg {
    cursor: pointer;
  }
`

export const Body = styled.div`
  display: flex;
  height: 100%;
  opacity: 0;
  max-height: 0;
  pointer-events: none;
  margin-bottom: 17px;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
  }

  &.active {
    max-height: max-content;
    opacity: 1;
    pointer-events: auto;
  }
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  width: 80%;
  margin-bottom: 17px;
`

export const Separator = styled.div`
  height: 1px;
  background: #b0b0b1;
  border-radius: 2px;
  margin-bottom: 17px;
`
