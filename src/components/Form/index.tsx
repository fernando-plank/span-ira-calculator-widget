import React from 'react'
import { useForm } from 'react-hook-form'

import { FormProps } from '@components/Form/FormBuilder'
import FormField from '@components/Form/FormField'
import FormSelect from '@components/Form/FormSelect'

import * as S from './styles'

type Inputs = {
  zip: string
  owner_status: string
  household_income: string
  tax_filing: string
  household_size: string
}
export const Form = (props: FormProps) => {
  const { fields, onSubmit } = props
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)} data-testid="form-element">
        {fields.map((field) => {
          if (field.type === 'select') {
            return (
              <S.FormInputGroup key={field.name}>
                <FormSelect
                  errors={errors}
                  field={field}
                  register={register(field.id, { ...field })}
                />
              </S.FormInputGroup>
            )
          }
          return (
            <S.FormInputGroup key={field.name}>
              <FormField
                errors={errors}
                field={field}
                register={register(field.id, { ...field })}
              />
            </S.FormInputGroup>
          )
        })}
        <S.FormButtonGroup>
          <S.CalculateButton data-testid="form-submit" type="submit">
            Calculate
          </S.CalculateButton>
        </S.FormButtonGroup>
      </S.Form>
    </>
  )
}

export default Form
