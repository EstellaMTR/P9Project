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
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


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
  onLogout?: () => void
}

type NavigationItemProps = {
  icon: React.ReactNode
  label: string
  showLabel: boolean
  isActive: boolean
  onClick?: () => void
}

function NavigationItem({
  icon,
  label,
  showLabel,
  isActive,
  onClick
}: NavigationItemProps) {
  return (

<Box
  onClick={onClick}
  sx={{
    ...navigationItemStyle,
    cursor: 'pointer',
    backgroundColor: isActive ? 'secondary.main' : 'transparent',
    borderRadius: 999,
    paddingX: showLabel ? 2 : 0,
    transition: 'background-color 0.2s ease',

    '&:hover': {
      backgroundColor: isActive
        ? 'secondary.main'
        : 'action.hover'
    }
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
  onLogout
}: NavigationSidebarProps) {
    
const [isExpanded, setIsExpanded] = useState(defaultExpanded)
const navigate = useNavigate()
const location = useLocation()

function handleHomeClick() {
  navigate('/')
}

function handleNotImplementedClick() {
  navigate('/not-implemented')
}

function handleLogoutClick() {
  onLogout?.()
}

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
  isActive={location.pathname === '/'}
  onClick={handleHomeClick}
/>
  
 <NavigationItem
  icon={<SchoolIcon />}
  label="All Courses"
  showLabel={isExpanded}
  isActive={false}
  onClick={handleNotImplementedClick}
/>
 <NavigationItem
  icon={<SmartToyIcon />}
  label="Prompt Tool"
  showLabel={isExpanded}
  isActive={false}
  onClick={handleNotImplementedClick}
/>
 <NavigationItem
  icon={<GroupsIcon />}
  label="Community"
  showLabel={isExpanded}
  isActive={false}
  onClick={handleNotImplementedClick}
/>
 <NavigationItem
  icon={<WorkspacePremiumIcon />}
  label="Certifications"
  showLabel={isExpanded}
  isActive={false}
  onClick={handleNotImplementedClick}
/>
 <NavigationItem
  icon={<HelpIcon />}
  label="Help"
  showLabel={isExpanded}
  isActive={false}
  onClick={handleNotImplementedClick}
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
  isActive={false}
  onClick={handleLogoutClick}
/>

 <NavigationItem
  icon={<SettingsIcon />}
  label="Settings"
  showLabel={isExpanded}
  isActive={false}
  onClick={handleNotImplementedClick}
/>
 </Box>

 </Box>
  )
}

export default NavigationSidebar