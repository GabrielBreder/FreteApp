import React from 'react';

import { Container, InputArea, Input } from './styles';

interface placeholder {
  placeholder: string;
}

const SingInput: React.FC<placeholder> = (props: placeholder) => {
  return (
    <Container>
      <InputArea>
        <Input 
          placeholder={props.placeholder}
        />
      </InputArea>
    </Container>
  );
}

export default SingInput;