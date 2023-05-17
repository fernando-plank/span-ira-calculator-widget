/* eslint-disable import/export */
import React, { ReactElement } from 'react'

import theme from '@styles/theme'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

jest.mock('../components/Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions)

export * from '@testing-library/react'
export { customRender as render }
