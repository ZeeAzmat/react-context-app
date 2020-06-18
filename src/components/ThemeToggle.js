import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme, isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? dark : light;

  return <button style={{ background: theme.bg, color: theme.color }} onClick={ toggleTheme }>Toggle Theme!</button>;
}

export default ThemeToggle;
