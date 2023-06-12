import { ReactNode } from 'react'
import {
  AddressAndPaymentContainer,
  AddressAndPaymentSubtitleSection,
} from './styles'

interface SectionContainerProps {
  title: string
  subtitle: string
  icon: any
  children: ReactNode
}

export function SectionContainer({
  title,
  subtitle,
  icon,
  children,
}: SectionContainerProps) {
  return (
    <AddressAndPaymentContainer>
      <AddressAndPaymentSubtitleSection>
        {icon}
        <div className="address-payment-subtitle">
          <h2>{title}</h2>
          <span>{subtitle}</span>
        </div>
      </AddressAndPaymentSubtitleSection>
      {children}
    </AddressAndPaymentContainer>
  )
}
