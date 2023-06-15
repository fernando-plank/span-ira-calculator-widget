import React from 'react'

import * as S from './styles'
import Info from '@components/Info'
export const FormField = ({ field, register, errors }) => {
  return (
    <>
      <S.FormInputLabel>
        {field.label}
        {field.required ? ' *' : ''}
        <Info text={field.tooltip} />
      </S.FormInputLabel>
      <S.FormInput
        maxLength={field.maxLength ? field.maxLength : null}
        className={errors[field.id] ? 'error' : ''}
        placeholder={field.label}
        data-testid={field.id}
        {...register}
      />
      <S.FormFieldError data-testid={`${field.id}-error`}>
        {errors[field.id] ? '* This field is required' : ''}
      </S.FormFieldError>
    </>
  )
}

export default FormField
