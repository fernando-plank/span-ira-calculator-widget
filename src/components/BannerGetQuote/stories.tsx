import React from 'react'
import { Story, Meta } from '@storybook/react'

import BannerGetQuote from '.'

export default {
  title: 'BannerGetQuote',
  component: BannerGetQuote
} as Meta

export const Default: Story = () => <BannerGetQuote />
