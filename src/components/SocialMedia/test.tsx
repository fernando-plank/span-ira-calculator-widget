import { screen } from '@testing-library/react'
import { render } from '@utils/test-utils'

import SocialMedia from '.'

jest.mock('../Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

describe('<SocialMedia />', () => {
  it('should render social media link', () => {
    const { container } = render(
      <SocialMedia icon={'Facebook'} url={'http://facebook.com'} />
    )

    expect(screen.getByTestId('social-media-link')).toHaveProperty(
      'href',
      'http://facebook.com/'
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
