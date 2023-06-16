import React from 'react';
import {Redirect, Wrapper} from './styled';
import {Text} from 'react-native';

function Register({navigation}: any) {
  return (
    <Wrapper>
      <Text>REGISTER</Text>
      <Redirect onPress={() => navigation.navigate('LogIn')}>
        <Text>Ir a log in</Text>
      </Redirect>
    </Wrapper>
  );
}

export default Register;
