import { screen } from '@testing-library/react'
import { render } from '@utils/test-utils'

import BannerGetQuote from '.'
import React from 'react'

describe('<BannerGetQuote />', () => {
  // TODO Tests for buttons actions
  it('should render explore panel button', () => {
    const { container } = render(<BannerGetQuote />)

    expect(screen.getByText('Explore panel')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render get quote button', () => {
    const { container } = render(<BannerGetQuote />)

    expect(screen.getByText('Get quote')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
