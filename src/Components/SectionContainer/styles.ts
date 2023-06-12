import styled from 'styled-components'

export const AddressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  padding: 2.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme['base-card']};
`

export const AddressAndPaymentSubtitleSection = styled.div`
  display: flex;
  gap: 0.5rem;

  .address-payment-subtitle {
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3;
      align-self: stretch;

      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.3;
      align-self: stretch;

      color: ${(props) => props.theme['base-text']};
    }
  }
`
