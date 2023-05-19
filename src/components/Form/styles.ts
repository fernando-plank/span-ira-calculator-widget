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

  &.nice-select {
    display: none;
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
    background-color: ${(props) => props.theme.colors.primary};
    background: url('/img/chevron-down.svg') no-repeat center;
    pointer-events: none;
    margin-right: 20px;
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
