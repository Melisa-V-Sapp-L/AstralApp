// Vista de entrada.
import React from 'react';
import {ImageBackground, StyleSheet, View, Image} from 'react-native';

// Asigna una imagen de fondo a una variable
const image = require('@/assets/images/fondo.png');
// Asigna el GIF a una variable
const gifImage = require('@/assets/images/a4.gif');

const Cover = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="center" style={styles.image}>
      <View style={styles.box}>
      <Image 
        source={gifImage} 
        style={styles.gif}
        resizeMode="contain"
      />
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  box: {
    width: '25%',
    height: '20%',
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
  gif: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});

export default Cover;