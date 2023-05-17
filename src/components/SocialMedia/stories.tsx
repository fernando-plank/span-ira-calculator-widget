import React from 'react'
import { Story, Meta } from '@storybook/react'

import SocialMedia from '.'

export default {
  title: 'SocialMedia',
  component: SocialMedia
} as Meta

export const Default: Story = () => <SocialMedia icon="Facebook" url="#" />
