import React, { Component } from 'react';
import { 
  View, 
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image
 } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      gasPrice: '',
      alcoholPrice: '',
      bestChoice: ''
    };
    
    this.calcAgain = this.calcAgain.bind(this);
    this.calc = this.calc.bind(this);
  };
  
  calcAgain(visible){
    this.setState({modalVisible: visible});
  }

  calc(){
    if( (this.state.alcoholPrice / this.state.gasPrice) < 0.7 )
      this.setState({bestChoice: 'Álcool'});
    else
      this.setState({bestChoice: 'Gasolina'});

    this.setState({modalVisible: true});
  }
  
  render(){
    return(
      
      <View style={styles.container}>

        <Image 
          style={styles.image}
          source={require('./android/app/src/img/logo.png')}
        />

        <Text style={styles.question}>Qual melhor opção?</Text>

        <Text style={styles.label} >Álcool (preço por litro):</Text>
        <TextInput 
          style={styles.input}
          onChangeText={ (alcohol) =>  this.setState({alcoholPrice: alcohol}) }
        />

        <Text style={styles.label} >Gasolina (preço por litro):</Text>
        <TextInput 
          style={styles.input}
          onChangeText={ (gas) =>  this.setState({gasPrice: gas}) }
        />

        <TouchableOpacity style={styles.buttonCalc} onPress={ this.calc }>
          <Text style={styles.textButtonCalc}>Calcular</Text>
        </TouchableOpacity>

      <Modal transparent={true} animationType='slide' visible={this.state.modalVisible}>
        <View style={styles.modalView}>
          <Image 
            style={styles.image}
            source={require('./android/app/src/img/gas.png')}
          />
          
          <Text style={styles.textResult}>Compensa usar {this.state.bestChoice}</Text>
          
          <Text style={styles.textPrices}>Com os preços:</Text>
          
          <Text style={styles.textGas}>Álcool: R${this.state.alcoholPrice}</Text>
          <Text style={styles.textGas}>Gasolina: R${this.state.gasPrice}</Text>
          
          
          <TouchableOpacity style={styles.buttonCalcAgain} onPress={ () => this.calcAgain(false) }>
            <Text style={styles.textButtonCalcAgain}>Calcular novamente</Text>
          </TouchableOpacity>

        </View>
      </Modal>

    </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929'
  },
  input:{
    backgroundColor: '#FFF',
    marginBottom: 15,
    width: 370,
    borderRadius: 3
  },
  label:{
    color: '#FFF',
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  question:{
    color: '#FFF',
    marginLeft: 30,
    marginBottom: 50,
    fontSize: 22,
    fontWeight: 'bold'
  },
  modalView:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929'
  },
  textResult:{
    color: '#16ba3f',
    marginBottom: 25,
    fontSize: 22,
    fontWeight: 'bold'
  },
  image:{
    marginBottom: 20
  },
  buttonCalc:{
    width: 370,
    height: 40,
    backgroundColor: '#eb4034',
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  textButtonCalc:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonCalcAgain:{
    width: 180,
    height: 28,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: '#eb4034',
    borderWidth: 1,
    borderRadius: 4
  },
  textButtonCalcAgain:{
    color: '#eb4034',
    fontWeight: 'bold'
  },
  textPrices:{
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5
  },
  textGas:{
    color: '#FFF',
    marginBottom: 5
  }
});


export default App;
