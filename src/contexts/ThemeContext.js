import React, { createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: false,
    light: {syntax: '#444', ui: '#ddd', bg: '#eee'},
  }
  render() { 
    return (  );
  }
}
 
export default ThemeContextProvider;