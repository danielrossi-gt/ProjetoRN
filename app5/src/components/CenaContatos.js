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

const detalheContatos = require('../imgs/detalhe_contato.png');


export default class CenaContatos extends Component {
  render() {
    return (
      <View style={styles.fundo}>
        <StatusBar
          //hidden={true} 
          backgroundColor='#61BD8C'
        />
        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo='#61BD8C'/>

        <View style={styles.cabecalho}>
          <Image source={detalheContatos} />
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>

        <View style={styles.detalheContatos}>
          <Text style={styles.txtContatos}>TEL: (11) 1234-1234</Text>
          <Text>TEL: (11) 1234-1234</Text>
          <Text>TEL: (11) 1234-1234</Text>
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
    color: '#61BD8C',
    marginLeft: 10,
    marginTop: 25
  },
  detalheContatos: {
    marginTop: 20,
    padding: 20
  },
  txtContatos: {
    fontSize: 18
  }

});
