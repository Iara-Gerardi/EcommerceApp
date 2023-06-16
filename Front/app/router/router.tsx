import {useContext} from 'react';
import Home from '../screens/home';
import LogIn from '../screens/login';
import Register from '../screens/register';
import Profile from '../screens/profile';
import {AuthContext} from '../stores/Auth/context';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const Auth = createStackNavigator();
const Main = createDrawerNavigator();

function Router() {
  const {session} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {session ? (
        <Main.Navigator>
          <Main.Screen name="Home" component={Home} />
          <Main.Screen name="Profile" component={Profile} />
        </Main.Navigator>
      ) : (
        <Auth.Navigator screenOptions={{headerShown: false}}>
          <Auth.Screen name="Login" component={LogIn} />
          <Auth.Screen name="Register" component={Register} />
        </Auth.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Router;
