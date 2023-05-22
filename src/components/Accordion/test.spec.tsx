import { fireEvent, screen } from '@testing-library/react'
import { render } from '../../utils/test-utils'

import Accordion from '.'

jest.mock('../Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

describe('<Accordion />', () => {
  it('should add title', () => {
    const { container } = render(
      <Accordion
        style={{ backgroundColor: 'red' }}
        icon={'Plus'}
        title={'Title'}
      >
        Some text
      </Accordion>
    )

    expect(screen.getByText('Title')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should add classname on click', () => {
    const { container } = render(
      <Accordion icon={'Plus'} title={'Title'}>
        Some text
      </Accordion>
    )

    fireEvent.click(screen.getByTestId('accordion-title'))

    expect(screen.getByTestId('accordion-body')).toHaveClass('active')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render accordion body', () => {
    const { container } = render(
      <Accordion icon={'Plus'} title={'Title'}>
        Some text
      </Accordion>
    )

    expect(screen.getByText('Some text')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
