import styled from 'styled-components';
export const Wrapper = styled.div `
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  padding: 54px 24px;
  text-align: left;

  svg {
    & > path {
      fill: white;
    }
  }
`;
export const FooterContainer = styled.div `
  display: flex;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
  }
`;
export const LinksWrapper = styled.div `
  display: flex;
  margin-top: 54px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 40%;
  }
`;
export const LinksContainer = styled.div `
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 100%;
  }
`;
export const Link = styled.a `
  color: white;
  font-weight: 500;
  font-size: 12px;
  line-height: 32px;
  text-decoration: none;
`;
export const SocialMediaWrapper = styled.div `
  margin-top: 53px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const RightsText = styled.p `
  font-family: 'Graphik';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  padding-top: 53px;
  color: ${props => props.theme.colors.white}
`;
