import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import Routes from './routes';
import { dark } from './styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={dark}>
    <Routes />
  </ThemeProvider>
);

export default App;
