import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Feather from '@react-native-vector-icons/feather';
import Fontawesome6 from '@react-native-vector-icons/fontawesome6';

export default function App(){

  return(
  <View style={styles.container}>
    
    <Feather 
      name='umbrella'
      size={45}
      color="#FF0000"
    />

    <Fontawesome6 
      name='user'
      size={45}
      color="green"
    />

  </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});