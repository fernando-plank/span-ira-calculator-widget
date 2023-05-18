import React from 'react'
import { Story, Meta } from '@storybook/react'

import PersonalizedIncentives from '.'

export default {
  title: 'PersonalizedIncentives',
  component: PersonalizedIncentives
} as Meta

export const Default: Story = () => (
  <PersonalizedIncentives
    householdInformation={{
      estimated_annual_savings: 0,
      tax_savings: 0,
      pos_savings: 0
    }}
    incentivesRef={undefined}
  />
)
