import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App(){

  const buttonRef = useRef(null);

  function handleClick(){
    buttonRef.current.shake();
  }

  return(
  <View style={styles.container}>

      <Animatable.Text 
        style={styles.text}
        animation="shake"
      >
        Textinho
      </Animatable.Text>
  
    <ButtonAnimated 
      style={styles.button} 
      animation="pulse" 
      ref={buttonRef}
      onPress={handleClick}
    >
      <Text style={styles.textButton}>Animar</Text>
    </ButtonAnimated>

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
    fontSize: 25,
  },
  button:{
    width: '78%',
    height: 30,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  textButton:{
    color: '#FFF'
  }
});