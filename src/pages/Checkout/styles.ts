import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  form {
    display: flex;
    flex-wrap: wrap;

    width: 100%;

    align-items: flex-start;
    justify-content: space-between;

    gap: 2rem;
    margin-bottom: 2rem;
  }
`

export const CheckoutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: 40rem;
  gap: 0.75rem;
`

export const SectionTitle = styled.h1`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.3;

  color: ${(props) => props.theme['base-subtitle']};

  margin-bottom: 0.937rem;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 2rem;
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 2.5rem;

  border-radius: 6px 44px;

  background: ${(props) => props.theme['base-card']};
`

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin: 1.5rem auto;

  gap: 0.875rem;

  .subtotal {
    display: flex;

    flex: 1;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
    }
  }

  .total {
    display: flex;

    flex: 1;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 1.25rem;
      font-weight: 700;

      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const ButtonsGroup = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  margin-top: 2rem;

  gap: 0.75rem;
`
