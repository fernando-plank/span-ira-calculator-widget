import React from 'react'
import { Story, Meta } from '@storybook/react'

import About from '.'

export default {
  title: 'About',
  component: About
} as Meta

export const Default: Story = () => <About />
