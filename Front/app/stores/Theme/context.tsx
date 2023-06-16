import {useReducer, createContext} from 'react';
import {ContextState, ThemeValue} from './types';
import {themeReducer} from './reducer';
import {ThemeProvider} from 'styled-components';
import { themeConst } from '../../constants/Theme';

const initialState: ContextState = {theme: 'DARK'};

export const ThemeContext = createContext(initialState);

export const ThemeContextProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const setLightMode = () => dispatch({type: 'SET_MODE_LIGHT'});
  const setDarkMode = () => dispatch({type: 'SET_MODE_DARK'});
 
  const themeValue: ThemeValue = {...state, setLightMode, setDarkMode};
  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={themeConst[state.theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
