import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
const container = document.getElementById('root');
const root = createRoot(container);
console.log(root);
root.render(React.createElement(App, null));
