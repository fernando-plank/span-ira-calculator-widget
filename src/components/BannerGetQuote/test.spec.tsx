import { fireEvent, screen } from '@testing-library/react'
import { render } from '@utils/test-utils'

import BannerGetQuote from '.'

describe('<BannerGetQuote />', () => {
  // TODO Tests for buttons actions
  it('should render explore panel button', () => {
    const { container } = render(<BannerGetQuote />)
    const explorePanelButton = screen.getByText('Explore panel')

    expect(explorePanelButton).toBeInTheDocument()

    global.open = jest.fn()
    fireEvent.click(explorePanelButton)

    expect(container.firstChild).toMatchSnapshot()
    expect(global.open).toBeCalled()
  })

  it('should render get quote button', () => {
    const { container } = render(<BannerGetQuote />)

    expect(screen.getByText('Get quote')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
