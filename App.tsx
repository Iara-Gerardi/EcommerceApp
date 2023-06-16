/**
 * @format
 */

import HomeHero from './app/components/HomeHero';
import {SafeAreaView, Text, ScrollView} from 'react-native';
import ThemeIcon from './app/components/ThemeIcon';
// import ThemeContext from './app/components/HOC/ThemeProvider';
import IconList from './app/components/IconList';
import {ThemeContextProvider} from './app/stores/Theme/context';
import {AuthContextProvider} from './app/stores/Auth/context';
import Router from './app/router/router';

function App(): JSX.Element {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <Router/>
        {/* <ScrollView nestedScrollEnabled={true}>
          <ThemeIcon />
          <HomeHero />
          <HomeHero />
          <Text>aaaaaa</Text>
          <IconList />
        </ScrollView> */}
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
