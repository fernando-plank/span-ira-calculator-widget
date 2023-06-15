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
  maxLength?: number
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
  onReset: () => void
  isLoading?: boolean
  incentivesRef?: MutableRefObject<any>
}

class FormBuilder {
  private fields: FormFieldProps[]

  constructor() {
    this.fields = []
  }

  addField({ name, label, type, id, options, tooltip, maxLength = null }) {
    this.fields.push({
      name,
      label,
      type,
      id,
      options,
      maxLength,
      tooltip,
      required: false,
      value: ''
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

  build(submitCallback, resetCallback): FormProps {
    return {
      fields: this.fields,
      onSubmit: submitCallback,
      onReset: resetCallback
    }
  }
}

export default FormBuilder
