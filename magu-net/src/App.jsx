import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Theme';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import MobileApplication from './components/MobileApplication';
import Dataset from './components/Dataset';
import Implementation from './components/Dataset';
import Results from './components/Results';
import ModelArchitecture from './components/ModelArchitecture';
import FourierFit from './components/FourierFit';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = React.useState('dark');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <main>
          <Hero />
          <Introduction />
          <MobileApplication/>
          <Dataset/>
          <ModelArchitecture/>
          <FourierFit/>
          <Results />
          <Conclusion />
        </main>
        <Footer />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;