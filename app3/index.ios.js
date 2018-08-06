//Importação de componentes
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

//Definição da classe da Aplicação
class app3 extends Component {

  //Construtor
  constructor(props) {
    super(props);
    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }

  //Seta a escolha do usuário
  jokenpo(escolha) {
    //gerar número aleatório (0,1,2)
    const numAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';
    let resultado = '';


    switch (numAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: break;
    }

    if (escolhaComputador === 'pedra') {
      if (escolha === 'pedra') {
        resultado = 'Empate';
      }

      if (escolha === 'papel') {
        resultado = 'Você ganhou';
      }

      if (escolha === 'tesoura') {
        resultado = 'Você perdeu';
      }
    }

    if (escolhaComputador === 'papel') {
      if (escolha === 'pedra') {
        resultado = 'Você perdeu';
      }

      if (escolha === 'papel') {
        resultado = 'Empate';
      }

      if (escolha === 'tesoura') {
        resultado = 'Você ganhou';
      }
    }

    if (escolhaComputador === 'tesoura') {
      if (escolha === 'pedra') {
        resultado = 'Você ganhou';
      }

      if (escolha === 'papel') {
        resultado = 'Você perdeu';
      }

      if (escolha === 'tesoura') {
        resultado = 'Empate';
      }
    }

    this.setState({ escolhaUsuario: escolha,
                    escolhaComputador: escolhaComputador,
                    resultado: resultado });
  }
  
  //Renderização
  render() {
    return (
      <View style={styles.topo}>

        <Topo />

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title='pedra' onPress={() => { this.jokenpo('pedra'); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='papel' onPress={() => { this.jokenpo('papel'); }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='tesoura' onPress={() => { this.jokenpo('tesoura'); }} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />

        </View>
        
      </View>
    );
  }

}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  topo: {
    marginTop: 20
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

//Registro de componentes
AppRegistry.registerComponent('app3', () => app3);
