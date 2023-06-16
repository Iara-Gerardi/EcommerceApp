type Actions = 'LOG_IN' | 'LOG_OUT';
interface Payload {
  token: string;
}

export interface ContextAction {
  type: Actions;
  payload?: Payload;
}

export interface ContextState {
  session: boolean;
}

export interface AuthValue extends ContextState {
  logIn: () => void;
  logOut: () => void;
}
