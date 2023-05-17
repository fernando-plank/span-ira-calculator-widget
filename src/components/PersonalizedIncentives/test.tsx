import { screen } from '@testing-library/react'
import { render } from 'types/tax-credits'

import PersonalizedIncentives from '.'

const personalizedIncentivesProps = {
  pos_savings: 123,
  tax_savings: 320,
  estimated_annual_savings: 111
}

jest.mock('../Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

describe('<PersonalizedIncentives />', () => {
  it('should render the tax savings', () => {
    const { container } = render(
      <PersonalizedIncentives
        householdInformation={personalizedIncentivesProps}
      />
    )

    expect(screen.getByTestId('household_tax_savings')).toHaveTextContent(
      '$' + personalizedIncentivesProps.tax_savings
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the household anual savings', () => {
    const { container } = render(
      <PersonalizedIncentives
        householdInformation={personalizedIncentivesProps}
      />
    )

    expect(screen.getByTestId('household_annual_savings')).toHaveTextContent(
      '$' + personalizedIncentivesProps.estimated_annual_savings
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the household total savings', () => {
    const { container } = render(
      <PersonalizedIncentives
        householdInformation={personalizedIncentivesProps}
      />
    )

    expect(screen.getByTestId('household_total_savings')).toHaveTextContent(
      '$' +
        (personalizedIncentivesProps?.tax_savings +
          personalizedIncentivesProps?.pos_savings)
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
