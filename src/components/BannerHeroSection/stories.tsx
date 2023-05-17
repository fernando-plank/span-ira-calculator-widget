import React from 'react'
import { Story, Meta } from '@storybook/react'

import { BannerHeroSection } from '.'

export default {
  title: 'Banner Hero Section',
  component: BannerHeroSection
} as Meta

export const Default: Story = () => <BannerHeroSection />
