import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Characters from './components/Characters/Characters';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';

function App() {
  return (
    <>
    <BrowserRouter>
    <Menu>
      <Container>
        <Menu.Item header>
          <Link to="/"><h3>Star Wars Universe</h3></Link>
        </Menu.Item>
      </Container>
    </Menu>
    <Container>
      <Route exact path="/" component={Characters} />
      <Route exact path="/characters/:id" component={CharacterDetails}/>
    </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
