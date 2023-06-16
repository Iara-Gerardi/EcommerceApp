import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {ThemeContext} from '../../stores/Theme/context';
import {useContext} from 'react';
import {ThemeValue} from '../../stores/Theme/types';

function ThemeIcon() {
  const {theme, setDarkMode, setLightMode} = useContext(
    ThemeContext,
  ) as ThemeValue;

  const isDarkTheme = theme === 'DARK';
  const iconName = isDarkTheme ? 'sun' : 'moon';
  const toggleTheme = () => (isDarkTheme ? setLightMode() : setDarkMode());

  return (
    <TouchableOpacity onPress={toggleTheme}>
      <Icon name={iconName} size={30} />
    </TouchableOpacity>
  );
}

export default ThemeIcon;
