import React from 'react';

import { TouchableOpacity, Text, BoldText } from './styles';

import { useNavigation } from '@react-navigation/native';

interface singTexts {
  accountText: string,
  log_registerText: string,
  log_registerRoute: string
}

const SingText: React.FC<singTexts> = (props: singTexts) => {

  const navigation = useNavigation();
  
  return (
    <TouchableOpacity 
      onPress={
        () => {navigation.reset({
          routes: [{
            name: props.log_registerRoute
          }]
        })}}
    >
      <Text>
        {props.accountText} <BoldText>{props.log_registerText}.</BoldText>
      </Text>
    </TouchableOpacity>
  );

}

export default SingText;