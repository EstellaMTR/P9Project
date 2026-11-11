import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SchoolIcon from '@mui/icons-material/School'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import GroupsIcon from '@mui/icons-material/Groups'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import HelpIcon from '@mui/icons-material/Help'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'


const navigationItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  paddingY: 1,
  marginBottom: 1,
  whiteSpace: 'nowrap',
  minHeight: 56
}

type NavigationSidebarProps = {
  defaultExpanded?: boolean
  activeItem: string
}

type NavigationItemProps = {
  icon: React.ReactNode
  label: string
  showLabel: boolean
  isActive: boolean
}

function NavigationItem({
  icon,
  label,
  showLabel,
  isActive
}: NavigationItemProps) {
  return (
<Box
  sx={{
    ...navigationItemStyle,
    backgroundColor: isActive ? 'secondary.main' : 'transparent',
    borderRadius: 999,
    paddingX: showLabel ? 2 : 0,
  }}
>
   <Box
  sx={{
    width: 32,
    color: isActive ? 'common.white' : 'text.primary'
  }}
>
  {icon}
</Box>

      
<Typography
  sx={{
    opacity: showLabel ? 1 : 0,
    transition: 'opacity 0.2s ease',
    color: isActive ? 'common.white' : 'text.primary'
  }}
>
  {label}
</Typography>

</Box>
  )
} 

/**
 * Reusable navigation item used throughout the sidebar
 */ 
function NavigationSidebar({
  defaultExpanded = false,
  activeItem
}: NavigationSidebarProps) {
    
const [isExpanded, setIsExpanded] = useState(defaultExpanded)

return (

<Box
    onMouseEnter={() => setIsExpanded(true)}
    onMouseLeave={() => setIsExpanded(defaultExpanded)}
    sx={{
    width: isExpanded ? 250 : 80,
    position: 'absolute',
    zIndex: 1000,
    transition: 'width 0.3s ease',
    minHeight: '100vh',
    backgroundColor: 'primary.main',
    display: 'flex',
    flexDirection: 'column',
    padding: 3
  }}
>
<Box>
<Box
  sx={{
    height: 100
  }}
>
  {isExpanded && (
    <>
<Typography
  variant="subtitle1"
  sx={{
    color: 'secondary.main',
    lineHeight: 1
  }}
>
  AI
  <br />
  Trainer
</Typography>

<Typography
  sx={{
    fontSize: '12px',
    color: 'secondary.main',
    marginTop: 1
  }}
>
  Eurowind Energy.
</Typography>
    </>
  )}
</Box>
 

 <Box sx={{ mt: 4 }}>
 <NavigationItem
  icon={<HomeIcon />}
  label="Home"
  showLabel={isExpanded}
  isActive={activeItem === 'Home'}
/>
  
 <NavigationItem
  icon={<SchoolIcon />}
  label="All Courses"
  showLabel={isExpanded}
  isActive={activeItem === 'All Courses'}
/>
 <NavigationItem
  icon={<SmartToyIcon />}
  label="Prompt Tool"
  showLabel={isExpanded}
  isActive={activeItem === 'Prompt Tool'}
/>
 <NavigationItem
  icon={<GroupsIcon />}
  label="Community"
  showLabel={isExpanded}
  isActive={activeItem === 'Community'}

/>
 <NavigationItem
  icon={<WorkspacePremiumIcon />}
  label="Certifications"
  showLabel={isExpanded}
  isActive={activeItem === 'Certifications'}
/>
 <NavigationItem
  icon={<HelpIcon />}
  label="Help"
  showLabel={isExpanded}
  isActive={activeItem === 'Help'}
/>
 </Box>
 </Box>

 <Box
  sx={{
    marginTop: 'auto'
  }}
>
 <NavigationItem
  icon={<LogoutIcon />}
  label="Log out"
  showLabel={isExpanded}
  isActive={activeItem === 'Log out'}
/>

 <NavigationItem
  icon={<SettingsIcon />}
  label="Settings"
  showLabel={isExpanded}
  isActive={activeItem === 'Settings'}
/>
 </Box>

 </Box>
  )
}

export default NavigationSidebar

