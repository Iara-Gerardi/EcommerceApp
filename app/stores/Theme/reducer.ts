import {ContextAction, ContextState} from './types';

export const themeReducer = (
  state: ContextState,
  action: ContextAction,
) => {
  switch (action.type) {
    case 'SET_MODE_LIGHT':
      return {theme: 'LIGHT'};
    case 'SET_MODE_DARK':
      return {theme: 'DARK'};
    default:
      console.error(new Error('Action type not supported'));
      return {theme: 'LIGHT'};
  }
};
