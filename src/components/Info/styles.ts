import styled from 'styled-components'

export const Tooltip = styled.div`
  width: max-content;
  display: contents;
`

export const InfoContent = styled.h4`
  background-color: ${({ theme }) => theme.colors.white};
  width: max-content;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  color: ${({ theme }) => theme.colors.black};
  max-width: 300px;
  text-transform: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`
