import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@pages/Home'
import theme from '@styles/theme'
import GlobalStyles from '@styles/global'

import { ThemeProvider } from 'styled-components'

export const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)
