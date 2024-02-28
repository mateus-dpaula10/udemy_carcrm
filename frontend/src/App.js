import React from 'react';
import { Button } from '@mui/material';

const App = () => (
  <>
    <h1>Aplicação React</h1>
    <Button color="secondary">Secondary</Button>
    <Button variant="contained" color="success">
      Success
    </Button>
    <Button variant="outlined" color="error">
      Error
    </Button>
  </>
)

export default App;
