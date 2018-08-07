import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import ListaItens from './src/components/listaitens';

export default class app4 extends Component {
  render() {

    const teste = 'Este é um valor';
    console.log(teste);
    return (
      <ListaItens />
    );
  }
}

AppRegistry.registerComponent('app4', () => app4);
