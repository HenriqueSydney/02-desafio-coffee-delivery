import styled from 'styled-components'

export const HomeBannerContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  gap: 3.5rem;

  width: 100%;
  height: 34rem;

  img {
    @media (max-width: 60rem) {
      width: 50%;
    }
  }
`
export const HomeBannerTitle = styled.h1`
  margin-bottom: 1rem;

  font-family: 'Baloo 2';
  font-size: 3rem;
  color: ${(props) => props.theme['base-title']};
  font-weight: 800;
  line-height: 1.3;

  @media (max-width: 60rem) {
    font-size: 2.5rem;
  }
`

export const HomeBannerSubtitle = styled.span`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: 400;
  line-height: 1.3;
  font-stretch: 100;

  @media (max-width: 60rem) {
    font-size: 1rem;
  }
`

export const ItemsContainer = styled.div`
  display: flex;
  flex: 1;

  align-items: flex-start;
  justify-content: space-between;

  width: 100%;

  margin-top: 4.125rem;

  @media (max-width: 60rem) {
    margin-top: 1rem;
    gap: 1rem;
  }
`

export const ItemsContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  align-items: flex-start;
  gap: 1.25rem;
`

export const ItemDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1.25rem;

  gap: 0.75rem;
`
