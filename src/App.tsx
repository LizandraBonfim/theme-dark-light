import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import Home from './pages/Home';
import Header from './components/Header';
import GlobalStyle from './global';


import light from './shared/theme/light';
import dark from './shared/theme/dark';
import usePersisteTheme from './shared/theme/usePersisteTheme';



function App() {

  const [theme, setTheme] = usePersisteTheme<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  useEffect(() => {

    window.scrollTo(0, 0)
  }, [])


  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <GlobalStyle />

        <Header toggleTheme={toggleTheme} />

        <main>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </main>

      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;