import React, { Component } from 'react';
import { Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Text style={{ color: "#FFF", fontSize: 30 }}>Login</Text>
    </Container>
  );
}

export default Login;