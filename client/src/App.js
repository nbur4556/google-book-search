import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Bootstrap Components
import Container from 'react-bootstrap/Container';

// Components
import Saved from './pages/Saved.js';
import Search from './pages/Search.js';
import NavigationBar from './components/NavigationBar.js';

function App() {
  return (
    <article>
      <BrowserRouter>
        <NavigationBar />

        {/* Page Content */}
        <Container>
          <Route exact path="/"><Saved /></Route>
          <Route exact path="/search"><Search /></Route>
        </Container>
      </BrowserRouter>
    </article>
  );
}

export default App;
