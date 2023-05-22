import { screen } from '@testing-library/react'
import React from 'react'
import { render } from '../../utils/test-utils'

import Faq from '.'

jest.mock('../Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

describe('<Faq />', () => {
  it('should render the title', () => {
    const { container } = render(<Faq />)

    expect(screen.getByText('Rebate FAQs')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
