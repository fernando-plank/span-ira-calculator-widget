import { fireEvent, screen } from '@testing-library/react'
import { render } from '@utils/test-utils'

import Info from '.'

jest.mock('../Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

describe('<Info />', () => {
  it('should show tooltip when click on icon', () => {
    const { container } = render(<Info text="Info Content" />)

    expect(screen.getByTestId('tooltip')).toBeInTheDocument()

    fireEvent.mouseEnter(screen.getByTestId('tooltip'))

    expect(screen.getByText('Info Content')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should show tooltip when click on icon', () => {
    const { container } = render(<Info text="Info Content" />)

    expect(screen.getByTestId('tooltip')).toBeInTheDocument()

    fireEvent.mouseEnter(screen.getByTestId('tooltip'))
    fireEvent.mouseLeave(screen.getByTestId('tooltip'))

    expect(screen.queryByText('Info Content')).not.toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
