import React from 'react'

import Info from '@components/Info'

import * as S from './styles'
export const FormField = ({ field, register, errors }) => {
  return (
    <>
      <S.FormInputLabel>
        {field.label}
        {field.required ? ' *' : ''}
        <Info text={field.tooltip} />
      </S.FormInputLabel>
      <S.FormInput
        placeholder={field.label}
        data-testid={field.id}
        {...register}
      />
      {errors[field.id] && (
        <S.FormFieldError data-testid={`${field.id}-error`}>
          * This field is required
        </S.FormFieldError>
      )}
    </>
  )
}

export default FormField
