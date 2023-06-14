import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    padding: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 0px 64px;
  }
`

export const Form = styled.form`
  margin-top: 64px;
  width: 100%;
  display: flex;
  flex: 0 0 100%;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 121px;
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
  align-self: end;
  cursor: pointer;
  
  
  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    margin-top: -20px;
    margin-right: 60px;
  }
  
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
    align-items: end;
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
      fill: #6f7070;
    }

    & > circle {
      stroke: #6f7070;
    }
  }
`

export const FormInput = styled.input`
  box-sizing: border-box;
  height: 68px;
  border: 2px solid #b0b0b1;
  background: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  padding-left: 24px;
  height: 80px;

  &.error {
    border: 2px solid #F72A63;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 60px white inset !important;
    -webkit-text-fill-color: black !important;
  }

  &:focus-visible {
    border: 2px black solid;
    outline: none !important;
  }
`

export const FormSelectWrapper = styled.div`
  width: 100%;
  border: 2px solid #b0b0b1;
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  height: 80px;

  &::after {
    content: '';
    grid-area: select;
    justify-self: end;
    width: 1.5em;
    height: 1.5em;
    //background-color: ${(props) => props.theme.colors.primary};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='%23B0B0B1'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.283 18.7448L0.316983 7.77881C-0.08678 7.37505 -0.0867814 6.72042 0.316982 6.31665C0.720746 5.91289 1.37538 5.91289 1.77914 6.31665L12.0141 16.5516L22.2492 6.3165C22.6529 5.91273 23.3076 5.91273 23.7113 6.31649C24.1151 6.72026 24.1151 7.37489 23.7113 7.77865L12.7606 18.7294C12.7556 18.7346 12.7505 18.7398 12.7453 18.745C12.3415 19.1487 11.6869 19.1487 11.2832 18.745L11.283 18.7448Z' fill='%23B0B0B1'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: cover;
    pointer-events: none;
    margin-right: 20px;
  }

  &.error {
    border: 2px solid #F72A63;
  }
`

export const FormSelect = styled.select`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  background: none;
  letter-spacing: 0;
  text-align: left;
  padding-left: 24px;
  align-items: center;
  width: 100%;
  grid-area: select;
  display: block !important;
  cursor: pointer;
  color: gray;

  &.selected {
    color: black;
  }
`

export const FormFieldError = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  color: #F72A63;
  padding: 8px 0;
  height: 32px;
  text-align: left;
`

export const CalculateButton = styled.button`
  width: 160px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
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
