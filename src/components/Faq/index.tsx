import React from 'react'
import Accordion from '@components/Accordion'

import * as S from './styles'

const Faq = () => {
  const accordionStyle = { fontSize: '16px', lineHeight: 'normal' }
  return (
    <S.Wrapper>
      <S.Title test-dataid="faq-component-title">Rebate FAQs</S.Title>
      <Accordion
        style={accordionStyle}
        icon={'Plus'}
        title="Will Enphase IQ  integrate with SPAN without SPAN Remote Meter?"
      >
        <S.FaqBody>
          All tax credits are available now. The rebates should start to become
          available by the end of 2023. We don`&lsquo;`t know exactly when the
          rebates marked “late 2023” will be available, because it will depend
          on how each state rolls out its incentive program.
        </S.FaqBody>
      </Accordion>
      <Accordion
        style={accordionStyle}
        icon={'Plus'}
        title="What is SPAN Remote Meter?"
        data-testid="accordion-span-remote-meter"
      >
        <S.FaqBody>
          In many cases, no! The IRA’s incentives are designed to increase
          access to clean technology. For households with lower incomes, up to
          100% of appliance and installation costs are discounted at purchase,
          meaning you could install efficient electric appliances at no cost,
          with no spending.Middle-income households do have to spend in order to
          access savings, but up to 50% of appliance and installation costs can
          be covered through upfront discounts, and you can use tax credits to
          cover some of the remaining gap. Highest-income households are not
          eligible for upfront discounts, so you will have to pay full price for
          appliances and installation — but tax credits on the back end could
          recoup up to 30% of your costs.
        </S.FaqBody>
      </Accordion>
      <Accordion style={accordionStyle} icon={'Plus'} title="How does it work?">
        <S.FaqBody>
          <p>
            Yes! The IRA’s up-front electrification rebates and electrification
            tax credits can all be used by renters. Many of these upgrades —
            including window-unit heat pumps (which should qualify by
            2024/2025), electric stoves/cooktops, and heat pump clothes dryers —
            are portable, so renters can bring them to their next homes and
            won’t have to leave any savings behind. Renters are also eligible
            for the used and new EV tax credits. And although they’re not
            exactly consumer-facing, renters will benefit from the IRA’s $1
            billion investment in affordable housing energy upgrades and the new
            tax deduction for efficiency upgrades in commercial buildings
            (including apartment buildings). Renters can also subscribe to
            community solar — which will be cheaper because of the IRA’s
            supply-side renewable energy incentives.
          </p>
        </S.FaqBody>
      </Accordion>
      <Accordion
        style={accordionStyle}
        icon={'Plus'}
        title="Where is the Remote Meter installed?"
      >
        <S.FaqBody>
          All tax credits were available starting January 1, 2023, so save your
          receipts for filing season! If you installed rooftop solar in 2022, it
          is eligible for the new, 30% 25D tax credit. If you installed a heat
          pump in 2022, it is eligible for the old 25C tax credit: 10% of costs
          up to $300. The Electrification Rebates and Efficiency Rebates will
          likely not be retroactive.
        </S.FaqBody>
      </Accordion>
    </S.Wrapper>
  )
}

export default Faq
