import styled from 'styled-components'

export const Wrapper = styled.div`
  color: #111111;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.mobileS}) {
    padding: 30px 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileXL}) {
    padding: 30px 32px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 30px 40px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    padding: 40px 64px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
    width: ${({ theme }) => theme.breakpoints.laptopL};
    margin: 0px auto;
  }
`

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  width: 100%;
  padding: 24px 0 65px;
  text-align: left;

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 50%;
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
