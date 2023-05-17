import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from 'utils/test-utils'

import Home from '../../pages'

function setupUserEvent(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx)
  }
}

jest.mock('../Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

const setup = () => {
  const { user } = setupUserEvent(<Home incentives={[]} />)
  const zip: HTMLInputElement = screen.getByTestId('zip')
  const owner_status: HTMLSelectElement = screen.getByTestId('owner_status')
  const household_income: HTMLInputElement =
    screen.getByTestId('household_income')
  const tax_filing: HTMLSelectElement = screen.getByTestId('tax_filing')
  const household_size: HTMLSelectElement = screen.getByTestId('household_size')

  return {
    zip,
    owner_status,
    household_income,
    tax_filing,
    household_size,
    user
  }
}

describe('Houselhold Information Tests', () => {
  it('should add text to Zip Code', () => {
    const { zip } = setup()
    fireEvent.input(zip, { target: { value: '90210' } })
    expect(zip.value).toBe('90210')
  })
  it('should select one option to Owner Status', () => {
    const { owner_status } = setup()
    fireEvent.select(owner_status, { target: { value: 'homeowner' } })
    expect(owner_status.value).toBe('homeowner')
  })
  it('should insert value to household income', () => {
    const { household_income } = setup()
    fireEvent.input(household_income, { target: { value: '65000' } })
    expect(household_income.value).toBe('65000')
  })
  it('should select one option to Tax Filing Status', () => {
    const { tax_filing } = setup()
    fireEvent.select(tax_filing, { target: { value: 'single' } })
    expect(tax_filing.value).toBe('single')
  })
  it('should select one option to Household Size', () => {
    const { household_size } = setup()
    fireEvent.select(household_size, { target: { value: '1' } })
    expect(household_size.value).toBe('1')
  })
  it('should call callback when submit form', async () => {
    const {
      household_size,
      owner_status,
      household_income,
      tax_filing,
      zip,
      user
    } = setup()

    fireEvent.input(zip, { target: { value: '90210' } })
    fireEvent.select(owner_status, { target: { value: 'homeowner' } })
    fireEvent.input(household_income, { target: { value: '65000' } })
    fireEvent.select(tax_filing, { target: { value: 'single' } })
    fireEvent.select(household_size, { target: { value: '1' } })

    await user.click(screen.getByTestId('form-submit'))

    expect(screen.queryByTestId('household_size-error')).toBeNull()
  })
})
