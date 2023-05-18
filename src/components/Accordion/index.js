import React, { useState } from 'react';
import Icon from '@components/Icon';
import classname from 'classnames';
import * as S from './styles';
const Accordion = (props) => {
    const [showSection, setShowSection] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Header, null,
            React.createElement(S.Title, { "data-testid": "accordion-title", style: props.style, onClick: () => setShowSection(!showSection) }, props.title),
            React.createElement(Icon, { icon: props.icon, onClick: () => setShowSection(!showSection) })),
        React.createElement(S.Separator, null),
        React.createElement(S.Body, { "data-testid": "accordion-body", className: classname({ active: showSection }) }, props.children)));
};
export default Accordion;
