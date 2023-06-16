import { MutableRefObject } from 'react'

export type SelectOptionProps = {
  value: string
  label: string
}
export interface FormFieldProps {
  name: string
  label: string
  type: 'text' | 'password' | 'email' | 'select'
  required: boolean
  value: string
  tooltip: string
  pattern?: any
  maxLength?: any
  id:
    | 'zip'
    | 'owner_status'
    | 'household_income'
    | 'tax_filing'
    | 'household_size'
  options?: SelectOptionProps[]
}

export interface FormProps {
  fields: FormFieldProps[]
  onSubmit: (data) => void
  onReset?: () => void
  isLoading?: boolean
  incentivesRef?: MutableRefObject<any>
  info?: any
}

class FormBuilder {
  private fields: FormFieldProps[]

  constructor() {
    this.fields = []
  }

  addField({ name, label, type, id, options, tooltip, pattern = {}, maxLength = {} }) {
    this.fields.push({
      name,
      label,
      type,
      id,
      options,
      tooltip,
      required: false,
      value: '',
      pattern,
      maxLength
    })

    return this
  }

  makeRequired() {
    const lastField = this.fields[this.fields.length - 1]

    if (lastField) {
      lastField.required = true
    }

    return this
  }

  build(submitCallback, resetCallback = () => {}): FormProps {
    return {
      fields: this.fields,
      onSubmit: submitCallback,
      onReset: resetCallback
    }
  }
}

export default FormBuilder
