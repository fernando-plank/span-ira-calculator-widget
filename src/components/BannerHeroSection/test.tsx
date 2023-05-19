import { screen } from '@testing-library/react'
import React from 'react'
import { render } from '../../utils/test-utils'

import { BannerHeroSection } from '.'

jest.mock('../Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

describe('<BannerHeroSection />', () => {
  it('should render the heading', () => {
    const { container } = render(<BannerHeroSection />)

    expect(screen.getByText('Calculate your SPAN savings')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the description', () => {
    const { container } = render(<BannerHeroSection />)

    expect(screen.getByTestId('description')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
