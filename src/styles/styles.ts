import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: ${(props) => props.theme.colors.mainBg};
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
