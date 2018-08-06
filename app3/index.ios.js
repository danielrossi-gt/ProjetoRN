import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const Estilos = {

  principal: {
    paddingTop: 30
  }

}

class MeuComponente extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.teste}</Text>

      </View>
    );
  }

}

const { principal } = Estilos;  

class app3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      texto : 'Texto Teste 2'
    };
  }

  alteraTexto() {
    this.setState( { texto : 'Outra coisa' } );
  }

  render() {
    return (
      <View style={principal}>
        <MeuComponente teste={this.state.texto}></MeuComponente>
        <Button 
          title='Botão'
          onPress={ () => { this.alteraTexto() }}
        />
      </View>
    );
  }

}

AppRegistry.registerComponent('app3', () => app3);
