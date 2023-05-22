import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    padding: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 88px 64px 0 64px;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex: 0 0 100%;
  flex-wrap: wrap;
  align-items: center;
`

export const FormTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 35vw;
  }
`

export const ResetCalculatorButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
`

export const ResetCalculatorButton = styled.a`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  color: #1f1f1f;
`

export const FormContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
  }
`

export const FormInputGroup = styled.div`
  display: flex;
  flex: 0 0 100%;
  margin-top: 22px;
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex: 0 0 30%;
    margin-right: 3%;
    margin-top: 55px;
    height: 138px;
  }
`

export const FormButtonGroup = styled.div`
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  margin-top: 22px;
  height: 110px;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex: 0 0 30%;
    margin-right: 3%;
    margin-top: 55px;
    align-items: center;
  }
`

export const FormInputLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #1f1f1f;
  margin-bottom: 14px;

  svg {
    & > path {
      fill: black;
    }

    & > circle {
      stroke: black;
    }
  }
`

export const FormInput = styled.input`
  box-sizing: border-box;
  height: 68px;
  border: 2px solid #b0b0b1;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  padding-left: 24px;

  &.error {
    border: 2px solid red;
  }
`

export const FormSelectWrapper = styled.div`
  width: 100%;
  border: 2px solid #b0b0b1;
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  border-radius: 4px;
  background-color: white;

  &::after {
    content: '';
    grid-area: select;
    justify-self: end;
    width: 2em;
    height: 2em;
    pointer-events: none;
    margin-right: 20px;
    background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    background-size: 1em auto;
  }

  &.error {
    border: 2px solid red;
  }
`

export const FormSelect = styled.select`
  height: 64px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  padding-left: 24px;
  align-items: center;
  width: 100%;
  grid-area: select;
  display: block !important;
`

export const FormFieldError = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  color: red;
  padding: 8px 0;
  height: 32px;
  text-align: left;
`

export const CalculateButton = styled.button`
  width: 160px;
  height: 40px;
  background: #00b0d3;
  border: 2px solid #00b0d3;
  border-radius: 20px;
  color: #fff;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  margin-top: 64px;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-top: 40px;
  }
`
