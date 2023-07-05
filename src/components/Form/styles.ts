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

export const Title = styled.h1`
  font-weight: 700;
  line-height: 40px;
  width: 100%;
  padding: 24px 0 0px;
  text-align: left;

  @media (min-width: ${(props) => props.theme.breakpoints.mobileS}) {
    font-size: 28px;
  }
  
  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 530px;
    font-size: 32px;
  }
`

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  
  @media (min-width: ${(props) => props.theme.breakpoints.mobileS}) {
    flex-direction: column;
  }
  
  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    flex-direction: row;
  }
  
  @media (min-width: 1366px) {
    //padding-right: 55px;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex: 0 0 100%;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 66px;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.breakpoints.mobileS}) {
    gap: 20px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    gap: 40px;
  }
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

export const ResetCalculatorButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  color: #1f1f1f;
  align-self: end;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.breakpoints.mobileS}) {
    position: absolute;
    bottom: -85px;
  }
  
  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    position: relative;
    bottom: 0;
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
  flex-direction: column;
  justify-content: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex: 0 0 30%;
  }
`

export const FormButtonGroup = styled.div`
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  height: 110px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex: 0 0 30%;
    //margin-top: 55px;
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
  background-color: #fafafa;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
  text-align: left;
  padding-left: 24px;
  height: 80px;

  &.error {
    border: 2px solid #f72a63;
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
    border: 2px solid #f72a63;
  }
`

export const FormSelect = styled.select`
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
  cursor: pointer;
  color: gray;
  background-color: #fafafa;

  &.selected {
    color: black;
  }
`

export const FormFieldError = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  color: #f72a63;
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
  margin-top: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-top: 40px;
  }
`

export const DivRef = styled.div`
  height: 65px;
  visibility: hidden;
  backgroundcolor: rgb(250, 250, 250);
  position: absolute;
  bottom: -65px;
  left: 0;
`
