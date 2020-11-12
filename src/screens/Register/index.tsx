import React from 'react';

import { Container } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SingInput from '../../components/SingInput';
import SingButton from '../../components/SingButton';
import SingText from '../../components/SingText';

const Register: React.FC = () => {
  return (
    <Container>
      <Icon 
        name="truck-fast" 
        size={120} 
        color="#ebebeb" 
        style={{
          marginBottom: 100
        }}
      />
      <SingInput  
        placeholder="Digite seu email"
      />
      <SingInput  
        placeholder="Digite sua senha"
      />
      <SingInput  
        placeholder="Confirme a senha"
      />
      <SingButton 
        text="REGISTRAR"
      />
      <SingText 
        accountText="Já possui uma conta?"
        log_registerText="Entre"
        log_registerRoute="Login"
      />
    </Container>
  );
}

export default Register;