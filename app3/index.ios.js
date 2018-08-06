//Importação de componentes
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

//Estilos
const Estilos = {

  principal: {
    paddingTop: 30
  }

};

const { principal } = Estilos;  


//Definição da classe da Aplicação
class app3 extends Component {

  //Construtor
  constructor(props) {
    super(props);
    this.state = {
      escolhaUsuario : ''
    }
  }

  //Seta a escolha do usuário
  jokenpo(escolha) {
    this.setState( { escolhaUsuario : escolha } );
  }
  
  //Renderização
  render() {
    return (
      <View style={principal}>
        <Text>Escolha do Computador</Text>
        <Text>Escolha do Usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado</Text>
        <Button title='pedra' onPress={ () => {this.jokenpo('pedra')} } />
        <Button title='papel' onPress={ () => {this.jokenpo('papel')} } />
        <Button title='tesoura' onPress={ () => {this.jokenpo('tesoura')} } />
      </View>
    );
  }

}

//Registro de componentes
AppRegistry.registerComponent('app3', () => app3);
