import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal.js';
import CenaClientes from './src/components/CenaClientes.js';
import CenaContatos from './src/components/CenaContatos.js';
import CenaEmpresa from './src/components/CenaEmpresa.js';
import CenaServicos from './src/components/CenaServicos.js';


export default class app5 extends Component {
  render() {
    return (
      <Navigator 
		initialRoute={{ id: 'principal' }}
		renderScene={(route, navigator) => {
		/* definir a cena com base na rota */
    switch (route.id) {
      case 'principal': 
        return (<CenaPrincipal navigator={navigator} />);
      case 'clientes':
        return (<CenaClientes navigator={navigator} />);
      case 'contatos':
        return (<CenaContatos navigator={navigator} />);
      case 'empresa':
        return (<CenaEmpresa navigator={navigator} />);
      case 'servicos':
        return (<CenaServicos navigator={navigator} />);
      default:
        return false;
    }
		}}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
