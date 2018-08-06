//Importação de componentes
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

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
          
          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>

        </View>
        
      </View>
    );
  }

}

class Topo extends Component {
  render() {
    return (
        <View>
          <Image source={require('./imgs/jokenpo.png')} />
        </View>
    );
  }
}

class Icone extends Component {

  render() {
    //this.props.escolha
    //this.props.jogador
    if (this.props.escolha === 'pedra') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('./imgs/pedra.png')} />
        </View>
      );
    } else if (this.props.escolha === 'papel') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('./imgs/papel.png')} />
        </View>
      );
    } else if (this.props.escolha === 'tesoura') {
      return (
       <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('./imgs/tesoura.png')} />
        </View>
      );
    } else {
      return false;
    }
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
  },
  icone:  {
    alignItems: 'center',
    marginBottom: 20,
    
  },
  txtJogador: {
    fontSize: 18  
  }

});

//Registro de componentes
AppRegistry.registerComponent('app3', () => app3);
