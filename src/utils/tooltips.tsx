import { IncentivesApiResponse } from '@services/types'
import { ReactChild } from 'react'
import styled from 'styled-components'

export interface taxCreditsTooltip {
  item: string
  body: ReactChild
}

export const TitleFont = styled.div`
  font-weight: bold;
  font-size: 12pt;
`

export const BodyFont = styled.div`
  font-weight: 500;
  font-size: 12pt;
`

export const TitleFontSpan = styled.span`
  font-weight: bold;
  font-size: 12pt;
`

export const BodyFontSpan = styled.span`
  font-weight: 500;
  font-size: 12pt;
`

const tooltips: taxCreditsTooltip[] = [
  {
    item: 'SPAN Smart Electrical Panel',
    body: (
      <>
        <TitleFont>25C Tax Credit</TitleFont>
        <BodyFont>Provides 30% tax credit of maximum $600 per year</BodyFont>
      </>
    )
  },
  {
    item: 'Battery Storage Installation',
    body: (
      <>
        <TitleFont>25D Tax Credit</TitleFont>
        <BodyFont>Uncapped 30% of equipment and installation costs</BodyFont>
      </>
    )
  },
  {
    item: 'Geothermal Heating Installation',
    body: (
      <>
        <TitleFont>25D Tax Credit</TitleFont>
        <BodyFont>Uncapped 30% of equipment and installation costs</BodyFont>
      </>
    )
  },
  {
    item: 'Electric Vehicle Charger',
    body: (
      <>
        <TitleFontSpan>Up to $1,000</TitleFontSpan>
        <BodyFontSpan>
          {' '}
          tax credit for rural or low-income communities
        </BodyFontSpan>
      </>
    )
  },
  {
    item: 'New Electric Vehicle',
    body: (
      <>
        <TitleFontSpan>Up to $7,500</TitleFontSpan>
        <BodyFontSpan> for new EVs (with a max cost of $80,000)</BodyFontSpan>
      </>
    )
  },
  {
    item: 'Used Electric Vehicle',
    body: (
      <>
        <TitleFontSpan>30% of the cost up to $4,000</TitleFontSpan>
        <BodyFontSpan> on used EVs (with a max cost of $25,000)</BodyFontSpan>
      </>
    )
  },
  {
    item: 'Heat Pump Air Conditioner/Heater',
    body: (
      <>
        <TitleFont>25C Tax Credit</TitleFont>
        <BodyFont>Provides 30% tax credit up to $2,000 per year</BodyFont>
      </>
    )
  },
  {
    item: 'Heat Pump Water Heater',
    body: (
      <>
        <TitleFont>25C Tax Credit</TitleFont>
        <BodyFont>Provides 30% tax credit up to $2,000 per year</BodyFont>
      </>
    )
  },
  {
    item: 'Rooftop Solar Installation',
    body: (
      <>
        <TitleFont>25D Tax Credit</TitleFont>
        <BodyFont>Uncapped 30% of equipment and installation costs</BodyFont>
      </>
    )
  },
  {
    item: 'Weatherization',
    body: (
      <>
        <TitleFont>25C Tax Credit</TitleFont>
        <BodyFont>Provides 30% tax credit up to $1,200 per year</BodyFont>
      </>
    )
  }
]

export const makeTaxCreditsTooltip = (
  elements: IncentivesApiResponse[]
): IncentivesApiResponse[] => {
  return elements.map((e) => {
    tooltips.map((t) => {
      if (e.item === t.item) {
        e['tooltip'] = t.body
      }
    })
    return e
  })
}
