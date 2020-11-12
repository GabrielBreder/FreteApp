import React from 'react';

import { Container, LoadingIcon } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFonts } from 'expo-font';
import { NotoSansKR_700Bold } from '@expo-google-fonts/dev';

import { useNavigation } from '@react-navigation/native'

const Preload: React.FC = () => {

  const navigation = useNavigation();

  const [ fontsLoaded ] = useFonts({
    NotoSansKR_700Bold
  });

  if (!fontsLoaded) {
    
  } else {
    navigation.navigate('Login');
  }

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