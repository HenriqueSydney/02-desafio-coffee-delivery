import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
  margin-bottom: 2rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 800;
    line-height: 1.3;
  }
`

export const CoffeeList = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: flex-start;

  @media (max-width: 57rem) {
    justify-content: space-evenly;
  }

  width: 100%;
  margin-top: 3.375rem;
  gap: 2rem;
`
