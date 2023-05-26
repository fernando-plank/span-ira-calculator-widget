import React from 'react'
import * as S from './styles'

const About = () => (
  <S.Wrapper>
    <S.Title data-testid="about-title">SPAN + IRA</S.Title>
    <S.DescriptionWrapper>
      <S.Description>
        Get the most up-to-date facts and information about how the IRA affects
        you and your home by reading SPAN® & the Inflation Reduction Act, a new
        addition to our blog written by SPAN CEO and Founder Arch Rao.
      </S.Description>
      <S.ReadBlogButton
        onClick={() =>
          window.open(
            'https://www.span.io/blog/span-and-the-inflation-reduction-act',
            '_self'
          )
        }
        data-testid="read-blog-button"
      >
        Read blog post
      </S.ReadBlogButton>
    </S.DescriptionWrapper>
  </S.Wrapper>
)
export default About
