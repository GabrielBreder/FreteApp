import React from 'react';

import { TouchableOpacity, Text, BoldText } from './styles';

interface singTexts {
  accountText: string,
  log_registerText: string
}

const SingText: React.FC<singTexts> = (props: singTexts) => {

  return (
    <TouchableOpacity>
      <Text>
        {props.accountText} <BoldText>{props.log_registerText}.</BoldText>
      </Text>
    </TouchableOpacity>
  );

}

export default SingText;