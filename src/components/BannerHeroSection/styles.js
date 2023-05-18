import styled from 'styled-components';
export const Wrapper = styled.div `
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};

  @media (min-width: ${(props) => props.theme.breakpoints.mobileS}) {
    padding: 24px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    padding: 64px;
  }
`;
export const Title = styled.h1 `
  text-align: left;
  margin-bottom: 113px;
  font-weight: 600;
  font-style: normal;
  color: ${props => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.mobileS}) {
    font-size: 70px;
    line-height: 70px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 136px;
    line-height: 136px;
  }
`;
export const Description = styled.h1 `
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  max-width: 360px;
  color: ${(props) => props.theme.colors.white}
`;
export const DescriptionWrapper = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 72px;

  svg {
    margin-bottom: ${(props) => props.theme.spacings.xsmall};
  }
`;
