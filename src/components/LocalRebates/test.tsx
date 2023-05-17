import { screen } from '@testing-library/react'
import { render } from '@utils/test-utils'

import LocalRebates from '.'

jest.mock('../Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

describe('<LocalRebates />', () => {
  it('should render the title', () => {
    const { container } = render(<LocalRebates />)

    expect(screen.getByTestId('local-rebates-title')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
