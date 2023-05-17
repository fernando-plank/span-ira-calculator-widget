import React from 'react'

import Info from '@components/Info'

import * as S from './styles'

export const FormSelect = ({ field, register, errors }) => {
  return (
    <>
      <S.FormInputLabel>
        {field.label}
        {field.required ? ' *' : ''}
        <Info text={field.tooltip} />
      </S.FormInputLabel>
      <S.FormSelectWrapper>
        <S.FormSelect {...register} data-testid={field.id}>
          <option value="" disabled hidden>
            {field.label}
          </option>
          {field.options?.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )
          })}
        </S.FormSelect>
      </S.FormSelectWrapper>
      {errors[field.id] && (
        <S.FormFieldError data-testid={`${field.id}-error`}>
          This field is required
        </S.FormFieldError>
      )}
    </>
  )
}

export default FormSelect
