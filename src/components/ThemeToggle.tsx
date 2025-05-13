import React from 'react';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';

const ToggleButton = styled.button`
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDark } = useTheme();
  return (
    <ToggleButton onClick={toggleTheme}>
      Switch to {isDark ? 'Light' : 'Dark'} Mode
    </ToggleButton>
  );
};

export default ThemeToggle;