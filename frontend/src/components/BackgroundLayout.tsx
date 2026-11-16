import Box from '@mui/material/Box';
import type { ReactNode } from 'react';
import NavigationSidebar from './NavigationSidebar';

type BackgroundLayoutProps = {
  children: ReactNode;
  onLogout?: () => void;
};

/**
 * This creates the background layers used on the lesson pages
 */

export default function BackgroundLayout({ children, onLogout }: BackgroundLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'stretch',
        padding: 3,
      }}
    >
      <NavigationSidebar defaultExpanded={false} onLogout={onLogout} />
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          backgroundColor: 'background.inner',
          borderRadius: '20px',
          padding: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
