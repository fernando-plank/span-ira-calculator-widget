import styled from 'styled-components';
export const Wrapper = styled.div `
  padding: 30px 19px;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  text-align: left;
`;
export const Title = styled.h1 `
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileS}) {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 46px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 88px;
  }
`;
export const FaqBody = styled.div `
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
