import React from 'react';
import {Button, ButtonText} from './styled';
import {ButtonProps} from './types';

function Submit({handleSubmit}: ButtonProps) {
  return (
    <Button onPress={handleSubmit}>
      <ButtonText>Submit</ButtonText>
    </Button>
  );
}

export default Submit;
