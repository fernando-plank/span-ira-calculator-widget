/* eslint-disable import/export */
import { ReactElement } from 'react'
import { RenderOptions, render } from '@testing-library/react'

import theme from '@styles/theme'
import { ThemeProvider } from 'styled-components'

jest.mock('../components/Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

const customRender = (ui: ReactElement, { ...options }: RenderOptions = {}) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options)

export * from '@testing-library/react'
export { customRender as render }
