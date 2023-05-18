import React from 'react';
import * as S from './styles';
const About = () => (React.createElement(S.Wrapper, null,
    React.createElement(S.Title, { "data-testid": "about-title" }, "SPAN + IRA"),
    React.createElement(S.DescriptionWrapper, null,
        React.createElement(S.Description, null, "Get the most up-to-date facts and information about how the IRA affects you and your home by reading SPAN\u00AE & the Inflation Reduction Act, a new addition to our blog written by SPAN CEO and Founder Arch Rao."),
        React.createElement(S.ReadBlogButton, { onClick: () => window.open('https://www.span.io/blog/span-and-the-inflation-reduction-act', '_self') }, "Read blog post"))));
export default About;
