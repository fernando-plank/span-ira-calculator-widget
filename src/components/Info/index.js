import React from 'react';
import { useState } from 'react';
import Icon from '@components/Icon';
import * as S from './styles';
const Info = (props) => {
    const [showContent, setShowContent] = useState(false);
    return (React.createElement(S.Tooltip, { "data-testid": "tooltip", onMouseEnter: () => setShowContent(true), onMouseLeave: () => setShowContent(false) },
        showContent && (React.createElement(S.InfoContent, { "data-testid": "tooltip-content" }, props.text)),
        React.createElement(Icon, { "data-testid": "tooltip-data", style: { margin: '0px 5px' }, icon: 'Info' })));
};
export default Info;
