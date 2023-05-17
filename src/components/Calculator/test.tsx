import { screen } from '@testing-library/react'
import { render } from 'utils/test-utils'

import Calculator from '.'

const setup = () => {
  const onSubmitCallback = jest.fn()
  const utils = render(<Calculator onSubmitCallback={onSubmitCallback} />)
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
    utils,
    onSubmitCallback
  }
}

describe('<Calculator />', () => {
  it('should verify if form components is on the screen', async () => {
    const { zip, owner_status, household_income, tax_filing, household_size } =
      setup()

    expect(zip).toBeInTheDocument()
    expect(owner_status).toBeInTheDocument()
    expect(household_income).toBeInTheDocument()
    expect(tax_filing).toBeInTheDocument()
    expect(household_size).toBeInTheDocument()
  })
})
