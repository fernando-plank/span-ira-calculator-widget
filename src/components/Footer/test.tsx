import { screen } from '@testing-library/react'
import { render } from '@utils/test-utils'

import Footer from '.'

jest.mock('../Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

describe('<Footer />', () => {
  it('should have link to social media', () => {
    const { container } = render(<Footer />)
    const links = screen.getAllByTestId('social-media-link')
    const hrefSocialNetwork = links.map((link: HTMLElement) =>
      link.getAttribute('href')
    )

    expect(hrefSocialNetwork).toMatchSnapshot()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have link to home', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText('Home')).toHaveProperty(
      'href',
      'https://www.span.io/'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have link to panel', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText('Panel')).toHaveProperty(
      'href',
      'https://www.span.io/panel'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have link to drive', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText('Drive')).toHaveProperty(
      'href',
      'https://www.span.io/drive'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have link to app', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText('App')).toHaveProperty(
      'href',
      'https://www.span.io/app'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have link to partners', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText('Installers & Partners')).toHaveProperty(
      'href',
      'https://www.span.io/partners'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have link to Mission & Careers', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText('Mission & Careers')).toHaveProperty(
      'href',
      'https://www.span.io/mission-careers'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have link to news', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText('News')).toHaveProperty(
      'href',
      'https://www.span.io/news'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have link to tech portal', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText('Tech Portal')).toHaveProperty(
      'href',
      'https://www.span.io/tech-portal'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have link to support', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText('Support')).toHaveProperty(
      'href',
      'https://support.span.io/hc/en-us/'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have link to terms of service', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText('Terms of Service')).toHaveProperty(
      'href',
      'https://www.span.io/terms-of-service'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have link to privacy policy', () => {
    const { container } = render(<Footer />)

    const link = screen.getByText('Privacy Policy')

    expect(link).toHaveProperty('href', 'https://www.span.io/privacy')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have link to legal', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText('Legal')).toHaveProperty(
      'href',
      'https://www.span.io/legal'
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
