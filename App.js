import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Switch, Button, Alert} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      Idade: '',
      sexo: "aisuhsaiuh",
      sexos: [
        {key: 1, sexoNome: 'Masculino'},
        {key: 2, sexoNome: 'Feminino'}
      ],
      limite: 1000,
      isEstudante: false
    };
  
    this.mostrarValores = this.mostrarValores.bind(this);

  };
  
  mostrarValores() {

    if(this.state.nome === '' || this.state.idade === '')
      alert('Preencha todos os campos');
    else
      alert(
        'Conta criada com sucesso!!! \n\n' +
        'Nome: ' + this.state.nome + '\n' +
        'Idade: ' + this.state.idade + '\n' +
        'Sexo: ' + this.state.sexos[this.state.sexo].sexoNome + ' \n' +
        'Limite:  ' + this.state.limite.toFixed(0) + '\n' +
        'Tipo de conta:  ' + ((this.state.isEstudante) ? 'Estudante' : 'Padrão')
      );
  }

  render(){
    let sexosItem = this.state.sexos.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.sexoNome} />
    })

    return(

      <View style={styles.container}>
      
        <Text style={styles.titulo}>Preencha todas as informações abaixo para criar sua conta. </Text>

        <TextInput 
        style={styles.inputText} 
        onChangeText={ (valorNome) => this.setState({nome: valorNome}) }
        placeholder="Informe seu nome" />
        
        <TextInput 
          style={styles.inputText} 
          onChangeText={ (valorIdade) => this.setState({idade: valorIdade}) }
          placeholder="Informe sua idade"
        />

        <Picker style={styles.picker}
          selectedValue={this.state.sexo} 
          onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>  
            {sexosItem}
        </Picker>
      
        <Slider
          value={this.state.limite}
          minimumValue={500}
          maximumValue={1500}
          onValueChange={ (valorLimite) => this.setState({limite: valorLimite}) }
        />
        <Text style={styles.inputSlider}>{this.state.limite.toFixed(0)}</Text>
        
        <Text style={styles.inputs}>
          Você é estudante? 
          {(this.state.isEstudante) ? " Sim" : " Não"}
          <Switch style={styles.switchEstudante}
            value={this.state.isEstudante}
            onValueChange={(valorSwitch) => this.setState({isEstudante: valorSwitch}) }
          />
        </Text>
        
        <Button style={styles.botao}
          title='Abrir conta' 
          onPress={this.mostrarValores}
        />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 20
  },
  titulo:{
    fontSize: 23,
    fontWeight: 'bold'
  },
  inputText:{
    fontSize: 18,
    marginBottom: 20,
    borderBottomWidth: 1
  },
  inputSlider:{
    fontSize: 18,
    textAlign: 'center',
  },
  switchEstudante:{
    textAlign: 'left'
  },
  picker:{
    marginBottom: 10
  },
  inputs:{
    fontSize: 18,
    marginBottom: 20,
  }
});


export default App;
