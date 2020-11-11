import React from 'react';

import { Button, ButtonText } from './styles';

interface buttonText {
  text: string;
}

const SingButton: React.FC<buttonText> = (props: buttonText) => {

  return (
    <Button>
      <ButtonText>
        {props.text}
      </ButtonText>
    </Button>
  );
}

export default SingButton;