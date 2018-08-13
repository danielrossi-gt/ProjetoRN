import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';


// importar o componente barra de navegação
import BarraNavegacao from './barranavegacao';

const detalheServico = require('../imgs/detalhe_servico.png');

export default class CenaServico extends Component {
  render() {
    return (
      <View style={styles.fundo}>
        <StatusBar
          //hidden={true} 
          backgroundColor='#CCC'
        />
        <BarraNavegacao voltar navigator={this.props.navigator} />

        <View style={styles.cabecalho}>
          <Image source={detalheServico} />
          <Text style={styles.txtTitulo}>Nossos Serviços</Text>
        </View>

        <View style={styles.detalheServico}>
          <Text style={styles.txtServico}>Consultoria</Text>
          <Text style={styles.txtServico}>Processos</Text>
          <Text style={styles.txtServico}>Acompanhamento de Projetos</Text>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    fontSize: 30,
    color: '#19D1C8',
    marginLeft: 10,
    marginTop: 25
  },
  detalheServico: {
    marginTop: 20,
    padding: 20
  },
  txtServico: {
    fontSize: 18
  }
});
