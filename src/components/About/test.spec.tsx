import { render } from '../../utils/test-utils'
import { fireEvent, screen } from '@testing-library/react'

import About from '.'

describe('<About />', () => {
  it('should render the title', () => {
    const { container } = render(<About />)

    expect(screen.getByTestId('about-title')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should call open on click button', () => {
    const { container } = render(<About />)
    const openSpy = jest.spyOn(window, 'open')

    const readBlogButton = screen.getByTestId('read-blog-button')
    expect(readBlogButton).toBeInTheDocument()

    fireEvent.click(readBlogButton)

    expect(container.firstChild).toMatchSnapshot()
    expect(openSpy).toBeCalled()
  })
})
