import React from 'react';
import { View, Text } from 'react-native';

import { Container, LoadingIcon } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Preload: React.FC = () => {
  return (
      <Container>
          <Icon name="truck-fast" size={120} color="#ebebeb" />
          <LoadingIcon 
            size="large"
            color="#FFF"
          />
      </Container>
  );
}

export default Preload;