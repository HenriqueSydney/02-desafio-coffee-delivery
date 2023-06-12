import { IconTagContainer } from './styles'
import { ThemeType } from '../../@types/styles'
import { useTheme } from 'styled-components'

interface IconTagProps {
  Icon: any
  backgroundTagColor: keyof ThemeType
}

export function IconTag({ Icon, backgroundTagColor }: IconTagProps) {
  const COLORS = useTheme()
  return (
    <IconTagContainer backgroundTagColor={backgroundTagColor}>
      {<Icon size={16} weight="fill" color={COLORS.white} />}
    </IconTagContainer>
  )
}
