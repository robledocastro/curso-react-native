import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App(){
  const [contador, setContador] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  function adicionar(){
    if(contador < 10){
      setContador(contador+1);
      if(contador == 10)
        setDisableButton(true);
    }
  }

  function remover(){
    if(contador > 0)
      setContador(contador-1);
  }

  return(
  
  <View style={styles.container}>

    <Text style={styles.text}>Pessoas no restaurante:</Text>
    <View style={styles.areContador}>
      <Text style={styles.contador}>{contador}</Text>
    </View>
    { contador >= 10 &&
      <View style={styles.areaMsgLimite}>
        <Text style={styles.msgLimite}>Restaurante no seu limite de pessoas</Text>
      </View>
    }
    <View style={styles.areaBtn}>
      <TouchableOpacity style={styles.botao} onPress={adicionar} disabled={disableButton} activeOpacity={false}>
        <Text style={styles.botaoText}>Adicionar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={remover}>
        <Text style={styles.botaoText}>Remover</Text>
      </TouchableOpacity>
    </View>

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
    fontSize: 18,
    marginBottom: 20
  },
  areContador:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    height: 70,
    width: 50,
    borderRadius: 5
  },
  contador:{
    color: '#FFF',
    fontSize: 30,
    fontWeight: '500',
  },
  areaMsgLimite:{
    backgroundColor: '#d69d00',
    marginTop: 20,
    marginBottom: -10
  },
  msgLimite:{
    padding: 5
  },
  areaBtn:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center'
  },
  botao:{
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#007bff'
  },
  botaoText:{
    fontSize: 15,
    color: '#FFF'
  },

});