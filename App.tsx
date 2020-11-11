import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Preload from './src/screens/Preload';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

export default function App() {
  return (
    // <Preload />
    // <Login />
    <Register />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
