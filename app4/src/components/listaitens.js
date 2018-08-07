import React, { Component } from 'react';
import {
    View
  } from 'react-native';
import axios from 'axios';
import Itens from './itens.js';

class ListaItens extends Component {

  componentWillMount() {
    //Requisição HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => { console.log(response); })
      .catch(() => { console.log('Erro ao recuperar dados.'); });
  }

  render() {
    return (
      <View>
		<Itens />
		<Itens />
		<Itens />
      </View>
      
    );
  }
}

export default ListaItens;
