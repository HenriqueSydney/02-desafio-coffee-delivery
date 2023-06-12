import styled from 'styled-components'

export const TagContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0.25rem 0.5rem;

  border-radius: 99999px;

  background: ${(props) => props.theme['yellow-light']};

  span {
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']};
  }
`
