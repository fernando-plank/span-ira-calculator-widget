import { screen } from '@testing-library/react'
import { render } from '../../utils/test-utils'

import TaxCredits from '.'

jest.mock('../Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

describe('<TaxCredits />', () => {
  it('should render the heading', () => {
    render(<TaxCredits tableData={[]} />)

    expect(screen.getByTestId('tax-credits-title')).toHaveTextContent(
      'Tax credits'
    )
  })

  it('should format percent correctly', () => {
    render(<TaxCredits tableData={[{ item: 'Item', amount: 0.1 }]} />)

    expect(screen.getByText('10%')).toBeInTheDocument()
  })

  it('should format dollar amount correctly', () => {
    render(<TaxCredits tableData={[{ item: 'Item', amount: 100 }]} />)
    expect(screen.getByText('$100')).toBeInTheDocument()
  })
})
