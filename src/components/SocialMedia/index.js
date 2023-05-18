import React from 'react';
import Icon from '@components/Icon';
import * as S from './styles';
const SocialMedia = (props) => (React.createElement(S.Link, { "data-testid": "social-media-link", target: "_blank", href: props.url },
    React.createElement(Icon, { icon: props.icon })));
export default SocialMedia;
