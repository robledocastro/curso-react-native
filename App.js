import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function App(){
  const widthAnimada = useRef(new Animated.Value(150)).current;
  const heightAnimada = useRef(new Animated.Value(50)).current;

  useEffect(()=> {
    Animated.timing(heightAnimada, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: false
    }).start();
  }, []);

  return(
  
  <View style={styles.container}>

    <Animated.View
      style={{
        width: widthAnimada,
        height: heightAnimada,
        backgroundColor: '#4169e1',
        justifyContent: 'center'
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