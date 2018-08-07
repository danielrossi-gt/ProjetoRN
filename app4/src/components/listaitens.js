import React, { Component } from 'react';
import {
    View
  } from 'react-native';

import Itens from './itens.js';

class ListaItens extends Component {

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
