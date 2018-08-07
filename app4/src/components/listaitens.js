import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet
  } from 'react-native';
import axios from 'axios';
import Itens from './itens.js';

class ListaItens extends Component {

  constructor(props) {
    super(props);
    this.state = { listaItens: [] };
  }

  componentWillMount() {
    //Requisição HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => { this.setState({ listaItens: response.data }); })
      .catch(() => { console.log('Erro ao recuperar dados.'); });
  }

  render() {
    return (
      <ScrollView style={styles.topo}>
        { this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />)) } 
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  topo: {
    marginTop: 20,
    backgroundColor: '#DDD' 
  }
});

export default ListaItens;
