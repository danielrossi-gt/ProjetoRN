import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  View
} from 'react-native';

// importar o componente barra de navegação
import BarraNavegacao from './src/components/barranavegacao';

export default class app5 extends Component {
  render() {
    return (
      <View>
        <StatusBar
          //hidden={true} 
          backgroundColor='#CCC'
        />
        <BarraNavegacao />
      </View>
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
