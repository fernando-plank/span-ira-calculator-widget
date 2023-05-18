import React from 'react'
import { Story, Meta } from '@storybook/react'

import HouseholdInformation from '.'

export default {
  title: 'HouseholdInformation',
  component: HouseholdInformation
} as Meta

const mockFunction = (data) => {
  return data
}
export const Default: Story = () => (
  <HouseholdInformation onSubmitCallback={mockFunction} info={{}} />
)