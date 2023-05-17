import React from 'react'
import Icon from '@components/Icon'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Icon',
  component: Icon
} as Meta

export const Default: Story = () => <Icon icon={'Logo'} />
