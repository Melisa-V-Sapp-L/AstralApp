// Componente de fondo. Vista de entrada.
import React from 'react';
import { useState } from 'react';
import { TextInput, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Asigna una imagen de fondo a una variable
const image = require('@/assets/images/fondo2.png');
const image2 = require('@/assets/images/boton.png');

const { width, height } = Dimensions.get('window');

export default function Zodiac() {
  // Variables
  const [mes, setMes] = useState<string>('Enero');
  const [dia, setDia] = useState<number | undefined>(undefined);
  // Array de los 12 meses
  const meses: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  // Funcion para el mes
  const handleMesChange = (value: string) => {
    setMes(value);
  };
  // Funcion para el dia
  const handleDiaChange = (value: string) => {
    const parsedNumber = parseInt(value, 10); // Convertir el texto a número entero
    if (!isNaN(parsedNumber)) {
      if (parsedNumber > 31) {
        alert('Número no válido. El número no puede ser mayor a 31');
        setDia(undefined);
      } else {
        setDia(parsedNumber); // Actualizar el estado con el número parseado
      }
    } 
  };
  // Funcion del boton Consultar
  const handlePress = () => {
    console.log(dia);
    console.log(mes);
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.box}>
          <Text style={styles.question}>¿No sabes cual es tu signo?</Text>
          <Text style={styles.titulo}>Selecciona el mes:</Text>
          <Picker
            selectedValue={mes}
            style={styles.picker}
            onValueChange={(itemValue: string, itemIndex: number) =>
              setMes(itemValue)}
          >
            {meses.map((m) => (
              <Picker.Item key={m} label={m} value={m} />
            ))}
          </Picker>
          <Text style={styles.titulo}>Ingresa el día:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => handleDiaChange(text)}
            value={dia !== undefined ? dia.toString() : ''}
            keyboardType="numeric" // Teclado numérico para facilitar la entrada de dígitos
            maxLength={2} // Longitud máxima permitida
          />

          <TouchableOpacity
            onPress={handlePress}
          >
            <ImageBackground source={image2} resizeMode="contain" style={styles.button}>
              <Text style={styles.titulo}>Consultar</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    padding: '1%',

  },
  question: {
    margin: '5%',
    color: '#2c4163',
    fontSize: width * 0.05,
    fontWeight: 'bold',

  },
  titulo: {
    color: '#2c4163',
    fontWeight: 'bold',
  },
  picker: {
    margin: '5%',
    height: 40,

  },
  input: {
    margin: '5%',
    padding: '2%',
    backgroundColor: '#fff',
    height: 40,
    textAlign: 'center',
    borderColor: '#2c4163',
    borderWidth: 2,
  },
  button: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

