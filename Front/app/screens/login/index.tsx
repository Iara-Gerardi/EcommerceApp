import React from 'react';
import {Redirect, Wrapper} from './styled';
import {Text} from 'react-native';

function LogIn({navigation}: any) {
  return (
    <Wrapper>
      <Text>LOG IN</Text>
      <Redirect onPress={() => navigation.navigate('Register')}>
        <Text>Ir a register</Text>
      </Redirect>
    </Wrapper>
  );
}

export default LogIn;
