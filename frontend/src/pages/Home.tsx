import NavigationSidebar from '../components/NavigationSidebar'
import { Box } from '@mui/material';

type HomeProps = {
  onLogout: () => void
}

export default function Home({ onLogout }: HomeProps) {
  return (
    <div>
      <NavigationSidebar
         defaultExpanded={true}
         onLogout={onLogout}
       /> 

      <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        padding: 3,
      }}
    >
      <Box
        sx={{
          minHeight: 'calc(100vh - 48px)',
          backgroundColor: 'background.inner',
          borderRadius: '20px',
          padding: 3,
        }}
      >
        <h1>Welcome to the Home Page</h1>
        <p>Pick up where you left off.</p>
        <h2>Continue learning.</h2>

      </Box>
    </Box>
      
    </div>
  );
}