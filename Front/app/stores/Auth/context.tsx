import {useEffect} from 'react';
import {authReducer} from './reducer';
import {createContext, useReducer} from 'react';
import {AuthValue, ContextState} from './types';

const initialState: ContextState = {session: false};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const logIn = () => {
    dispatch({type: 'LOG_IN'});
  };

  const logOut = () => {
    dispatch({type: 'LOG_OUT'});
  };

  const authValue: AuthValue = {...state, logIn, logOut};
  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};
