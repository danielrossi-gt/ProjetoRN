import React, { Component } from 'react';
import {
    View,
    Text
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
      <View>
        { this.state.listaItens.map(item => (<Text key={item.titulo}>{ item.titulo } </Text>)) } 
      </View>
      
    );
  }
}

export default ListaItens;
