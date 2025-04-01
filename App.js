import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function App(){

  const [nome, setNome] = useState('Robledo');
  const [input, setInput] = useState('');

  //Component DidMount
  useEffect(()=>{

    async function getStorage(){  
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if(nomeStorage !== null){
        setNome(nomeStorage);
      }
    }

    getStorage();

    //return() => {};

  }, [])


  //Component DidUpdate
  useEffect(()=>{

    async function saveStorage(){
      await AsyncStorage.setItem('nomes', nome)
    }

    saveStorage();

  }, [nome])

  function alteraNome(){
    setNome(input);
    setInput('');
  }

  return(
    <View style={styles.container}>
      
      <TextInput 
        placeholder='Seu nome...'
        value={input}
        onChangeText={(texto)=> setInput(texto) }
      />
      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnText}>Alterar Nome</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 15
  },
  texto:{
    color: '#000',
    fontSize: 35
  },
  btn:{
    backgroundColor: '#000',
    alignItems: 'center'
  },
  btnText:{
    color: '#FFF'
  }
});