import {ContextAction, ContextState} from './types';

export const authReducer = (state: ContextState, action: ContextAction) => {
  switch (action.type) {
    case 'LOG_IN':
      return {session: true};
    case 'LOG_OUT':
      return {session: false};
    default:
      console.error(new Error('Action type not supported'));
      return {session: false};
  }
};
