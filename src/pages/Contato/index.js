import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import  { useNavigation, StackActions } from '@react-navigation/native';

export default function Sobre(){

    const navigation = useNavigation();

    function handleHome(){
        navigation.dispatch(StackActions.popToTop());
    }

    return(
        <View style={styles.container}>
            <Text>Pagina Contato</Text>
            <Button title="VOLTAR HOME" onPress={handleHome}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});