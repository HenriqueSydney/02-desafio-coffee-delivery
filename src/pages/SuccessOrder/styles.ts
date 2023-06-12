import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  align-items: flex-start;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;

    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 1.25rem;
    font-stretch: 100;

    color: ${(props) => props.theme['base-subtitle']};
  }

  .info-and-image-container {
    display: flex;
    flex: 1;

    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 56.25rem) {
    img {
      display: none;
    }
  }
`

export const GradientContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  margin-top: 2.5rem;
  margin-bottom: 2rem;

  background-image: linear-gradient(
    102.89deg,
    ${(props) => props.theme['yellow-dark']} 2.61%,
    ${(props) => props.theme.purple} 98.76%
  );

  padding: 1px;

  border-radius: 6px 36px;

  @media (max-width: 56.25rem) {
    width: 100%;
  }
`

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  background: ${(props) => props.theme.white};

  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  border-radius: 6px 36px;
`

export const InfoContent = styled.div`
  display: flex;

  gap: 0.75rem;

  span {
    font-size: 1rem;

    color: ${(props) => props.theme['base-text']};
  }
`
