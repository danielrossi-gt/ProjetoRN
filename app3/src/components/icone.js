//Importação de componentes
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const pedra = require('../../imgs/pedra.png');
const papel = require('../../imgs/papel.png');
const tesoura = require('../../imgs/tesoura.png');

class Icone extends Component {

  render() {
    //this.props.escolha
    //this.props.jogador
    if (this.props.escolha === 'pedra') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={pedra} />
        </View>
      );
    } else if (this.props.escolha === 'papel') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={papel} />
        </View>
      );
    } else if (this.props.escolha === 'tesoura') {
      return (
       <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={tesoura} />
        </View>
      );
    } 
  }
  
}

const styles = StyleSheet.create({
  icone: {
    alignItems: 'center',
    marginBottom: 20,
    
  },
  txtJogador: {
    fontSize: 18  
  }
});

export default Icone;
