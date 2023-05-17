import React from 'react'
import FormBuilder from '@components/Form/FormBuilder'
import { Story, Meta } from '@storybook/react'

import Form from '.'

export default {
  title: 'Form',
  component: Form
} as Meta

const callback = (data) => {
  return data
}

const formFields = new FormBuilder()
  .addField({
    name: 'zip',
    label: 'Zip',
    tooltip: '',
    type: 'text',
    id: 'zip',
    options: []
  })
  .makeRequired()
  .addField({
    name: 'household_size',
    label: 'Household Size',
    tooltip: '',
    type: 'select',
    id: 'household_size',
    options: [
      { label: '1', value: '1' },
      { label: '2', value: '2' }
    ]
  })
  .build(callback)
export const Default: Story = () => <Form {...formFields} />
