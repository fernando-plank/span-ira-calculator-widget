import React from 'react'
import { Story, Meta } from '@storybook/react'

import Calculator from '.'

export default {
  title: 'Calculator',
  component: Calculator
} as Meta

const functionFake = () => {
  return ''
}

export const Default: Story = () => (
  <Calculator
    onSubmitCallback={functionFake}
    executeScroll={function (): void {
      throw new Error('Function not implemented.')
    }}
  />
)
