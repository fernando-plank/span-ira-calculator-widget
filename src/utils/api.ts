import { IncentivesResponse, TaxCreditsIncentives } from '@services/types'
import { makeTaxCreditsTooltip } from './tooltips'

export const formatTaxCreditsIncentives = (
  tax_credit_incentives: TaxCreditsIncentives[]
): TaxCreditsIncentives[] => {
  let eletricPanel: any = null
  let items: TaxCreditsIncentives[] = tax_credit_incentives.filter((item) => {
    if (item.item === 'Electric Panel') {
      eletricPanel = item
    }
    return item.type === 'tax_credit' && item.item !== 'Electric Panel'
  })

  items = items?.filter(
    (item, index, self) =>
      index ===
      self.findIndex((t) => {
        return t.item === item.item
      })
  )

  if (items && eletricPanel) {
    eletricPanel.amount = 600
    eletricPanel['item'] = 'SPAN Smart Electrical Panel'
    items.unshift(eletricPanel)
    items = makeTaxCreditsTooltip(items)
  }

  return items
}
