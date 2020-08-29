import 'semantic-ui-css/semantic.min.css';
import './app.css';
import React from 'react';
import { 
  Container,
} from 'semantic-ui-react';

import { 
  Home,
} from './pages';

export default function App() {
  return (
    <>
      <Container style={{ paddingTop: '2em' }}>
        <Home />
      </Container>
    </>
  );
}