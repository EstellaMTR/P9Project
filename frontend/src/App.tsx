import { Container, Typography } from '@mui/material';
import Login from './pages/Login';
import { useState } from 'react';
import Home from './pages/Home';
import Button from './components/Button'

function App() {
  return (
    <>
      <Button label="Save" color="primary" onClick={() => console.log('clicked')} />
      <Button label="Delete" color="secondary" icon="logout" onClick={() => console.log('clicked')} />
      <Button label="Warn" color="warning" onClick={() => console.log('clicked')} />
      <Button label="Plain" color="white" onClick={() => console.log('clicked')} />
    </>
  )
}



export default App;
