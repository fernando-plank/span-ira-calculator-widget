import FormBuilder from '@components/Form/FormBuilder'
import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from 'utils/test-utils'

import Form from '.'

function setupUserEvent(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx)
  }
}

jest.mock('../Icon', () => {
  return jest.fn(() => <div>mocked icon</div>)
})

const setup = () => {
  const onSubmitCallback = jest.fn()
  const onReset = jest.fn()
  const fields = new FormBuilder()
    .addField({
      name: 'zip',
      label: 'Zip Code',
      type: 'text',
      id: 'zip',
      tooltip: 'Some text',
      options: []
    })
    .makeRequired()
    .addField({
      name: 'owner_status',
      label: 'Owner Status',
      type: 'select',
      id: 'owner_status',
      tooltip: 'Some text',
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
      tooltip: 'Some text',
      options: []
    })
    .makeRequired()
    .addField({
      name: 'tax_filing',
      label: 'Tax Filing Status',
      type: 'select',
      id: 'tax_filing',
      tooltip: 'Some text',
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
      tooltip: 'Some text',
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
    .build(onSubmitCallback, onReset)
  const { user } = setupUserEvent(
    <Form
      fields={fields.fields}
      onReset={onReset}
      onSubmit={onSubmitCallback}
    />
  )

  const zip: HTMLInputElement = screen.getByTestId('zip')
  const owner_status: HTMLSelectElement = screen.getByTestId('owner_status')
  const household_income: HTMLInputElement =
    screen.getByTestId('household_income')
  const tax_filing: HTMLSelectElement = screen.getByTestId('tax_filing')
  const household_size: HTMLSelectElement = screen.getByTestId('household_size')

  const form = screen.getByTestId('form-element')

  return {
    zip,
    owner_status,
    household_income,
    tax_filing,
    household_size,
    form,
    user,
    onSubmitCallback
  }
}

describe('<Form />', () => {
  it('should render the form', () => {
    const { form } = setup()

    expect(form).toBeInTheDocument()
  })
  it('should verify if form components is on the screen', async () => {
    setup()

    const household_size: HTMLSelectElement =
      screen.getByTestId('household_size')
    const zip: HTMLInputElement = screen.getByTestId('zip')

    expect(household_size).toBeInTheDocument()
    expect(zip).toBeInTheDocument()
  })
  it('should verify text required field', async () => {
    const { zip, user } = setup()

    fireEvent.input(zip, { target: { value: '' } })

    await user.click(screen.getByTestId('form-submit'))

    expect(screen.getByTestId('zip-error')).toBeInTheDocument()
  })
  it('should verify select required field', async () => {
    const { household_size, user } = setup()

    fireEvent.input(household_size, { target: { value: '' } })

    await user.click(screen.getByTestId('form-submit'))

    expect(screen.getByTestId('household_size-error')).toBeInTheDocument()
  })
  it('should verify if callback is called', async () => {
    const {
      household_size,
      owner_status,
      household_income,
      tax_filing,
      zip,
      user,
      onSubmitCallback
    } = setup()

    fireEvent.input(zip, { target: { value: '90210' } })
    fireEvent.select(owner_status, { target: { value: 'homeowner' } })
    fireEvent.input(household_income, { target: { value: '65000' } })
    fireEvent.select(tax_filing, { target: { value: 'single' } })
    fireEvent.select(household_size, { target: { value: '1' } })

    await user.click(screen.getByTestId('form-submit'))

    expect(onSubmitCallback).toHaveBeenCalled()
  })
})
