import React from 'react';
import { Grid } from 'semantic-ui-react';
import Characters from './components/Characters/Characters';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';

function App() {
  return (
    <Grid container columns={2}>
      <Characters />
      <CharacterDetails />
    </Grid>
  );
}

export default App;
