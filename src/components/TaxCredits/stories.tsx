import React from 'react'
import { Story, Meta } from '@storybook/react'

import TaxCredits from '.'

export default {
  title: 'TaxCredits',
  component: TaxCredits
} as Meta

export const Default: Story = () => <TaxCredits tableData={[]} />
