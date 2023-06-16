export type CalculatorIncomes = {
  zip: string
  owner_status: string
  household_income: string
  tax_filing: string
  household_size: string
  field?: string
  error?: string
}

export type CalculatorIncentives = {
  location: string
}

export enum TAX_FILING {
  single = 'Single',
  joint = 'Joint',
  hoh = 'Head of Household'
}

export type IncentivesResponse = {
  pos_savings: number
  tax_savings: number
  estimated_annual_savings: number
}

export type IncentivesApiResponse = {
  type: string
  program: string
  program_es: string
  item: string
  item_es?: string
  more_info_url: string
  more_info_url_es: string
  amount: number
  amount_type: string
  representative_amount?: number
  item_type: string
  owner_status: Array<string>
  ami_qualification: string
  agi_max_limit?: string | number
  filing_status?: string | number
  start_date: number
  end_date: number
  field?: string
  error?: string
  message?: string
}

export type IncentivesObject = {
  incentives: IncentivesResponse[]
}
