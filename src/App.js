import React from 'react';
import { Grid } from 'semantic-ui-react';
import { BrowserRouter, Route } from 'react-router-dom';
import Characters from './components/Characters/Characters';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';

function App() {
  return (
    <Grid container columns={2}>
      <BrowserRouter>
      <Characters />
      <Route path="/characters/:id" component={CharacterDetails}/>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
