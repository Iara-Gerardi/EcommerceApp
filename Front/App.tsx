/**
 * @format
 */

import Router from './app/router/router';
import {ThemeContextProvider} from './app/stores/Theme/context';
import {AuthContextProvider} from './app/stores/Auth/context';

function App(): JSX.Element {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
