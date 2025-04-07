import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function App(){
  const widthAnimada = useRef(new Animated.Value(0)).current;
  const heightAnimada = useRef(new Animated.Value(5)).current;
  const opacidadeAnimada = useRef(new Animated.Value(1)).current;

  useEffect(()=> {
    
    Animated.sequence([
      Animated.timing(widthAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false
      }),
      Animated.timing(heightAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false
      })
    ]).start( () => {
      alert("Animação concluída!");
    });

  }, []);

  let porcentagemLargura = widthAnimada.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  });

  let porcentagemALtura = heightAnimada.interpolate({
    inputRange: [5, 100],
    outputRange: ['5%', '100%']
  });

  return(

  
  <View style={styles.container}>

    <Animated.View
      style={{
        width: porcentagemLargura,
        height: porcentagemALtura,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        opacity: opacidadeAnimada
      }}
    >
      <Text style={styles.text}>Carregando...</Text>
    </Animated.View>

  </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 22,
    textAlign: 'center',
    color: '#FFF',

  }
});