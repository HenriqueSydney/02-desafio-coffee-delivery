import styled from 'styled-components'

export const CartButtonContainer = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 6px;

  span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;

    border-radius: 9999px;

    background: ${(props) => props.theme['yellow-dark']};

    font-size: 0.75rem;
    color: ${(props) => props.theme.white};
    font-weight: 700;
  }
`
