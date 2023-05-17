import { screen } from '@testing-library/react'
import { render } from '@utils/test-utils'

import About from '.'

describe('<About />', () => {
  it('should render the title', () => {
    const { container } = render(<About />)

    expect(screen.getByTestId('about-title')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
