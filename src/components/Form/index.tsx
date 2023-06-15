import { useForm } from 'react-hook-form'

import { FormProps } from '@components/Form/FormBuilder'
import FormField from '@components/Form/FormField'
import FormSelect from '@components/Form/FormSelect'

import * as S from './styles'
import Loading from '@components/Loading'
import React, { useEffect, useState } from 'react'

type Inputs = {
  zip: string
  owner_status: string
  household_income: string
  tax_filing: string
  household_size: string
}
export const Form = (props: FormProps) => {
  const { fields, onSubmit, incentivesRef } = props
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>()

  const [resetSelect, setResetSelect] = useState(false)

  return (
    <>
      <Loading isLoading={props.isLoading} />
      <S.ResetCalculatorButton
        onClick={() => {
          props.onReset()
          reset()
          setResetSelect(true)
        }}
      >
        Reset Calculator
      </S.ResetCalculatorButton>
      <S.Form onSubmit={handleSubmit(onSubmit)} data-testid="form-element">
        {fields.map((field) => {
          if (field.type === 'select') {
            return (
              <S.FormInputGroup key={field.name}>
                <FormSelect
                  onReset={resetSelect}
                  setResetSelect={setResetSelect}
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
        <S.DivRef ref={incentivesRef}></S.DivRef>
      </S.Form>
    </>
  )
}

export default Form
