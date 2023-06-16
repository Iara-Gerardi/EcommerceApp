import {ReactNode} from 'react';

type Actions = 'SET_MODE_LIGHT' | 'SET_MODE_DARK';
interface Payload {
  token: string;
}

export interface ContextAction {
  type: Actions;
}

export interface ContextState {
  theme: string;
}

export interface ThemeMode {
  primary: string;
  text: string;
  accent: string;
}

export interface Theme {
  [index: string]: ThemeMode;
  LIGHT: ThemeMode;
  DARK: ThemeMode;
}

export interface Children {
  children: ReactNode;
}

export interface ThemeValue extends ContextState{
  setLightMode: () => void;
  setDarkMode: () => void;
}
