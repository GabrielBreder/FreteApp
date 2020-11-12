import React from 'react';

import { Container } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SingInput from '../../components/SingInput';
import SingButton from '../../components/SingButton';
import SingText from '../../components/SingText';

const Login: React.FC = () => {
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
      <SingButton 
        text="ENTRAR"
      />
      <SingText 
        accountText="Ainda não possui uma conta?"
        log_registerText="Registre-se"
        log_registerRoute="Register"
      />
    </Container>
  );
}

export default Login;