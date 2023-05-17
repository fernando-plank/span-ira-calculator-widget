import React from 'react'
import { Story, Meta } from '@storybook/react'

import Incentives, { CalculatorResponseProps } from '.'

export default {
  title: 'Incentives',
  component: Incentives
} as Meta

const incentives: CalculatorResponseProps[] = [
  {
    item: '',
    program: '',
    filing_status: '',
    amount_type: '',
    amount: 0,
    end_date: 0,
    item_url: '',
    type: ''
  }
]

export const Default: Story = () => <Incentives incentives={incentives} />
