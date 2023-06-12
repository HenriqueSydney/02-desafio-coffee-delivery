import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 256px;
  height: 310px;

  min-width: 256px;
  min-height: 310px;

  border-radius: 6px 36px;

  background: ${(props) => props.theme['base-card']};

  img {
    width: 120px;
    height: 120px;

    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }
`

export const TitleDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  align-items: center;
  justify-content: center;

  margin: 1rem 1.25rem 0;

  h1.coffee-name {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;

    color: ${(props) => props.theme['base-subtitle']};
  }

  span.coffee-description {
    margin-top: 0.5rem;

    text-align: center;

    font-size: 0.875rem;
    line-height: 1.3;

    color: ${(props) => props.theme['base-label']};
  }
`

export const TagContainer = styled.div`
  box-sizing: border-box;

  display: flex;

  align-items: center;
  justify-content: center;
`

export const PriceCartContainer = styled.div`
  display: flex;
  width: 100%;

  padding: 0 1.25rem;

  margin-top: 2rem;
  margin-bottom: 1.25rem;

  align-items: center;
  justify-content: space-between;
`

export const PriceContainer = styled.div`
  display: flex;
  flex: 1;

  .price {
    color: ${(props) => props.theme['base-text']};

    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.3;

    .currency {
      font-family: 'Roboto';
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.3;

      margin-right: 0.25rem;

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const ActionContainer = styled.div`
  display: flex;

  gap: 0.5rem;
`
