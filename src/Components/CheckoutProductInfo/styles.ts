import styled from 'styled-components'

export const CheckoutProductInfoContainer = styled.div`
  display: flex;
  width: 100%;

  align-items: flex-start;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`
export const CheckoutProductInfoContent = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  margin: 1.5rem auto;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  .coffee-details {
    display: flex;
    flex-direction: column;
    flex: 1;

    gap: 0.5rem;

    .coffee-name {
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }

    .action-container {
      display: flex;

      align-items: center;
      gap: 0.5rem;
    }
  }

  .price {
    font-weight: 700;
    line-height: 1.3;

    color: ${(props) => props.theme['base-text']};

    margin-left: 3.125rem;
  }
`
