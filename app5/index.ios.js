import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal.js';
import CenaClientes from './src/components/CenaClientes.js';


export default class app5 extends Component {
  render() {
    return (
      <Navigator 
		initialRoute={{ id: 'a' }}
		renderScene={(route, navigator) => {
		/* definir a cena com base na rota */
			if (route.id === 'a') {
				//exibir a cena principal
				return (<CenaPrincipal navigator={navigator} />);
			}

			if (route.id === 'b') {
				//exibir a cena clientes
				return (<CenaClientes />);
			}
		}}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
