import React from 'react'
import { Story, Meta } from '@storybook/react'

import Faq from '.'

export default {
  title: 'Faq',
  component: Faq
} as Meta

export const Default: Story = () => <Faq />
