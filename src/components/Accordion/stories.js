import React from 'react';
import Accordion from '.';
export default {
    title: 'Accordion',
    component: Accordion
};
export const Default = () => (React.createElement(Accordion, { icon: "Plus", title: "Title" }, "Description"));
