import styled from 'styled-components'
import { ThemeType } from '../../@types/styles'

interface IconTagContainerInterface {
  backgroundTagColor: keyof ThemeType
}

export const IconTagContainer = styled.div<IconTagContainerInterface>`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  padding: 0.5rem;

  border-radius: 9999px;

  background: ${(props) => props.theme[props.backgroundTagColor]};
`
