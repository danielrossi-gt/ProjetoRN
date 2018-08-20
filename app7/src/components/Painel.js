import React, { Component } from 'react';
import {View} from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

/* Notação normal 
export default function(props) {

	return (
		<View>
			<Text>Topo</Text>
		</View>
	)
}

*/

/* Notação Arrow Function
Omiti-se a palavtra function.
Do lado esquerdo vão os parâmetros, caso seja um só omite-se os parentêses.

Exemplo:
export default props => {
	return ...	
}

export default (props, teste) => {
	return ...	
}

Se na lógica da função só for retornado componentes do react, pode-se omitir a
palavra reservada Return e os parentêses, por exemplo:

export default props => (
	return (
		<View>
			<Text>Topo</Text>
		</View>
	);
)

pode ficar assim:

*/

class Painel extends Component {
	
	constructor(props) {
		super(props);
		this.state = { num1: '10', num2: '25' };
		this.calcular = this.calcular.bind(this);
	}


	calcular(){
		const resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
		console.log(resultado);
	}

	render() {
		return (
			<View>
				<Entrada num1={this.state.num1} num2={this.state.num2} />
				<Operacao />
				<Comando acao={this.calcular} />
			</View>
		);
	}
}	

/* quando a chave = atributo não precisa fazer mais assim:
export { Topo: Topo };
*/

export { Painel };