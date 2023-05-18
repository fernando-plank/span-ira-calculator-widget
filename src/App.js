import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import theme from '@styles/theme';
import GlobalStyles from "@styles/global";
import { ThemeProvider } from 'styled-components';
export const App = () => (React.createElement(ThemeProvider, { theme: theme },
    React.createElement(GlobalStyles, null),
    React.createElement(BrowserRouter, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) })))));
