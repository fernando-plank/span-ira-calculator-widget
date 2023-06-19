import styled from 'styled-components'

export const Tooltip = styled.div`
  width: max-content;
  position: relative;
  display: initial;

  svg {
    margin: 0px 10px;
  }
`

export const InfoContent = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  width: max-content;
  padding: 12px 16px;
  border-radius: 5px;
  position: absolute;
  color: ${({ theme }) => theme.colors.black};
  max-width: 300px;
  text-transform: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  bottom: 25px;
`
