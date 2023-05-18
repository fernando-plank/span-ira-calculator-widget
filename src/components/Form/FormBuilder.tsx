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
}

class FormBuilder {
  private fields: FormFieldProps[]

  constructor() {
    this.fields = []
  }

  addField({ name, label, type, id, options, tooltip }) {
    this.fields.push({
      name,
      label,
      type,
      id,
      options,
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

  build(submitCallback): FormProps {
    return {
      fields: this.fields,
      onSubmit: submitCallback
    }
  }
}

export default FormBuilder