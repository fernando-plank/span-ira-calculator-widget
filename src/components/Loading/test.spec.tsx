import { screen } from '@testing-library/react'

import Loading from '.'
import { render } from '@utils/test-utils'

jest.mock('../Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

describe('<Loading />', () => {
  it('should render the loading when isLoading is true', () => {
    const { container } = render(<Loading isLoading={true} />)

    expect(screen.getByTestId('loading')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should not render the loading when isLoading is true', () => {
    const { container } = render(<Loading isLoading={false} />)

    expect(screen.queryByTestId('loading')).not.toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
