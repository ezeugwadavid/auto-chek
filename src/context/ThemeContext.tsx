import React, { createContext, useContext, useState } from 'react';
import {  ThemeProvider as StyledThemeProvider } from 'styled-components';


const lightTheme = {
  background: '#ffffff',
  text: '#000000'
};

const darkTheme = {
  background: '#1a1a1a',
  text: '#ffffff'
};


const ThemeContext = createContext({ toggleTheme: () => {}, isDark: false });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);