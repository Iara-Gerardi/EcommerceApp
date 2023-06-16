import {HomeWrapper} from './styled';
import HomeHero from '../../components/HomeHero';
import IconList from '../../components/IconList';
import {Text} from 'react-native';

function Home() {
  return (
    <HomeWrapper>
      <Text>HOME</Text>
      <HomeHero />
      <IconList />
    </HomeWrapper>
  );
}

export default Home;
