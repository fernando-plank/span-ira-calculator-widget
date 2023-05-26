import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MenuIconWrapper = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ExplorePanelWrapper = styled.div`
  heigth: 24px;
  margin-right: 20px;
  cursor: pointer;
`
