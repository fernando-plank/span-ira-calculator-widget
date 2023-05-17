import React from 'react'
import { Story, Meta } from '@storybook/react'

import Info from '.'

export default {
  title: 'Info',
  component: Info
} as Meta

export const Default: Story = () => <Info text={'Info content'} />
