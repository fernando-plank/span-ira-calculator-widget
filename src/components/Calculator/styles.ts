import styled from 'styled-components'

export const Wrapper = styled.div`
  color: #111111;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
    padding: 0px 64px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.mobileS}) {
    padding: 0px 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
    padding: 0px 32px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0px 40px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    padding: 0px 64px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
    padding: 0px;
    width: 1400px;
    margin: 0px auto;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  width: 100%;
  padding: 24px 0 0px;
  text-align: left;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 510px;
  }
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;

  label,
  input {
    flex: 0 0 50%;
  }
`
