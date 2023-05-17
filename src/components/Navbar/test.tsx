import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import Navbar from '.'

jest.mock('../Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

describe('<Navbar />', () => {
  it('should render the explore planel button', () => {
    const { container } = render(<Navbar />)

    expect(screen.getByTestId('explore-panel-button')).toHaveAttribute(
      'src',
      'img/explore-panel.svg'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the menu button', () => {
    const { container } = render(<Navbar />)

    expect(screen.getByTestId('menu-button')).toHaveAttribute(
      'src',
      'img/menu.svg'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
