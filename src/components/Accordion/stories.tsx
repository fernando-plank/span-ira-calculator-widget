import React from 'react'
import { Story, Meta } from '@storybook/react'

import Accordion from '.'

export default {
  title: 'Accordion',
  component: Accordion
} as Meta

export const Default: Story = () => (
  <Accordion icon="Plus" title="Title">
    Description
  </Accordion>
)
