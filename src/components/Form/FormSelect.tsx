import React, { useEffect, useMemo, useState } from 'react'

import * as S from './styles'
import Info from '@components/Info'
import classnames from 'classnames'
import { Controller } from 'react-hook-form'

export const FormSelect = ({
  field,
  register,
  errors,
  onReset,
  setResetSelect
}) => {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    if (onReset) {
      setSelected(false)
      setResetSelect(false)
    }
  }, [onReset])

  return (
    <>
      <S.FormInputLabel>
        {field.label}
        {field.required ? ' *' : ''}
        <Info text={field.tooltip} />
      </S.FormInputLabel>
      <S.FormSelectWrapper className={errors[field.id] ? 'error' : ''}>
        <S.FormSelect
          {...register}
          data-testid={field.id}
          onChange={() => {
            setSelected(true)
            errors[field.id] = false
          }}
          className={classnames({ selected: selected })}
        >
          <option value="" disabled selected style={{ color: 'blue' }}>
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
      <S.FormFieldError data-testid={`${field.id}-error`}>
        {errors[field.id] ? errors[field.id]?.message : ''}
        {errors[field.id] && errors[field.id]?.type === 'required'
          ? '* This field is required'
          : ''}
      </S.FormFieldError>
    </>
  )
}

export default FormSelect
