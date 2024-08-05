// Componente de fondo. Vista de entrada.
import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Asigna una imagen de fondo a una variable
const image = require('@/assets/images/fondo3.png');

const Zodiac = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
        
      </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});

export default Zodiac;