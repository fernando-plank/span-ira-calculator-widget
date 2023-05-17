import React from 'react'
import { SubmitHandler } from 'react-hook-form'

import Form from '@components/Form'
import FormBuilder from '@components/Form/FormBuilder'
import CalculatorService from '@services/calculator'

import * as S from './styles'

type Inputs = {
  zip: string
  owner_status: string
  household_income: string
  tax_filing: string
  household_size: string
}

const Calculator = ({ onSubmitCallback }) => {
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await new CalculatorService().getCalculatorResponse(data)
    onSubmitCallback(response)
  }

  const fields = new FormBuilder()
    .addField({
      name: 'zip',
      label: 'Zip Code',
      type: 'text',
      id: 'zip',
      tooltip:
        'Your zip code helps determine the amount of discounts and tax credits you qualify for.',
      options: []
    })
    .makeRequired()
    .addField({
      name: 'owner_status',
      label: 'Owner Status',
      type: 'select',
      id: 'owner_status',
      tooltip: 'Homeowners and renters qualify for different incentives.',
      options: [
        { label: 'Homeowner', value: 'homeowner' },
        { label: 'Renter', value: 'renter' }
      ]
    })
    .makeRequired()
    .addField({
      name: 'household_income',
      label: 'Household Income',
      type: 'text',
      id: 'household_income',
      tooltip: `
        Enter your gross income (income before taxes). Include wages and salary plus other forms of income, 
        including pensions, interest, dividends, and rental income. If you are married and file jointly, include your spouse's income
      `,
      options: []
    })
    .makeRequired()
    .addField({
      name: 'tax_filing',
      label: 'Tax Filing Status',
      type: 'select',
      id: 'tax_filing',
      tooltip: `
        Select "Head of Household" if you have a child or relative living with you, and you 
        pay more than half the costs of your home. Select "Joint" if you file your taxes as a married couple.
      `,
      options: [
        { label: 'Single', value: 'single' },
        { label: 'Joint', value: 'joint' },
        { label: 'Head of Household', value: 'hoh' }
      ]
    })
    .makeRequired()
    .addField({
      name: 'household_size',
      label: 'Household Size',
      type: 'select',
      id: 'household_size',
      tooltip:
        'Include anyone you live with who you claim as a dependent on your taxes, and your spouse or partner if you file taxes together.',
      options: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' }
      ]
    })
    .makeRequired()
    .build(onSubmit)

  return (
    <S.Wrapper>
      <S.Title>Enter your household information to find your savings</S.Title>
      <Form fields={fields.fields} onSubmit={onSubmit} />
    </S.Wrapper>
  )
}

export default Calculator
