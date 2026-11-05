import MuiButton from '@mui/material/Button'
import { icons } from '../styles/icons'

type ButtonProps = {
  label: string
  /** MUI palette color to use. 'white' has no palette slot and is handled separately. */
  color: 'primary' | 'secondary' | 'warning' | 'white'
  /** Optional icon shown before the label. Key must match an entry in styles/icons.ts. */
  icon?: keyof typeof icons
  onClick: () => void
}

/**
 * Reusable styled button used across the app. Colors and font come from
 * the shared MUI theme (styles/theme.ts) instead of being set here.
 */
function Button({ label, color, icon, onClick }: ButtonProps) {
  const Icon = icon ? icons[icon] : undefined

  if (color === 'white') {
    return (
      <MuiButton
        variant="contained"
        onClick={onClick}
        startIcon={Icon ? <Icon /> : undefined}
        sx={{ backgroundColor: 'common.white', color: 'secondary.main', '&:hover': { backgroundColor: 'grey.100' } }}
      >
        {label}
      </MuiButton>
    )
  }

    // Here "white" is handled as a special case because it has no matching slot in
    // the MUI theme palette; 
  return (
    <MuiButton 
    variant="contained" 
    color={color} 
    onClick={onClick} 
    startIcon={Icon ? <Icon /> : undefined}>
        
      {label}
    </MuiButton>
  )
}

export default Button