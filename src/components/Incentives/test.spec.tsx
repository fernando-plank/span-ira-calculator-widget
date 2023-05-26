import { TAX_FILING } from '@services/types'
import { render, screen } from '@testing-library/react'

import Incentives from '.'

const calculatorResponseProps = {
  item: 'Item',
  program: 'Program',
  filing_status: 'single',
  amount_type: 'percent',
  amount: 0.3,
  end_date: 20210503,
  item_url: 'http://www.link.com',
  type: 'tax_credit'
}

describe('<Incentives />', () => {
  it('should render item', () => {
    const { container } = render(
      <Incentives incentives={[calculatorResponseProps]} />
    )

    expect(screen.getByText('Item')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render program', () => {
    const { container } = render(
      <Incentives incentives={[calculatorResponseProps]} />
    )

    expect(screen.getByText('Program')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render single status enum', () => {
    const { container } = render(
      <Incentives incentives={[calculatorResponseProps]} />
    )

    expect(screen.getByText(TAX_FILING.single)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render joint status enum', () => {
    calculatorResponseProps.filing_status = 'joint'
    const { container } = render(
      <Incentives incentives={[calculatorResponseProps]} />
    )

    expect(screen.getByText(TAX_FILING.joint)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render joint status enum', () => {
    calculatorResponseProps.filing_status = 'hoh'
    const { container } = render(
      <Incentives incentives={[calculatorResponseProps]} />
    )

    expect(screen.getByText(TAX_FILING.hoh)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render - without status', () => {
    calculatorResponseProps.filing_status = 'statusneverused'
    const { container } = render(
      <Incentives incentives={[calculatorResponseProps]} />
    )

    expect(screen.getByText('-')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render amount type percent', () => {
    const { container } = render(
      <Incentives incentives={[calculatorResponseProps]} />
    )

    expect(screen.getByText('30%')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render amount type dollar', () => {
    calculatorResponseProps.amount_type = 'currency'
    calculatorResponseProps.amount = 30
    const { container } = render(
      <Incentives incentives={[calculatorResponseProps]} />
    )

    expect(screen.getByText('$30')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
