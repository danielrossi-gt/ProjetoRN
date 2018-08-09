import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal.js';
import CenaClientes from './src/components/CenaClientes.js';
import CenaContatos from './src/components/CenaContatos.js';


export default class app5 extends Component {
  render() {
    return (
      <Navigator 
		initialRoute={{ id: 'principal' }}
		renderScene={(route, navigator) => {
		/* definir a cena com base na rota */
			if (route.id === 'principal') {
				//exibir a cena principal
				return (<CenaPrincipal navigator={navigator} />);
			}

			if (route.id === 'clientes') {
				//exibir a cena clientes
				return (<CenaClientes navigator={navigator} />);
			}

			if (route.id === 'contatos') {
				//exibir a cena contatos
				return (<CenaContatos navigator={navigator} />);
			}
		}}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
