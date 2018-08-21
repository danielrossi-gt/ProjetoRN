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
		this.state = { num1: '10', num2: '25', operacao: 'subtracao' };
		this.calcular = this.calcular.bind(this);
		this.atualizaValor = this.atualizaValor.bind(this);
		this.atualizaOperacao = this.atualizaOperacao.bind(this);
	}


	calcular(){

		let resultado = 0;

		switch (this.state.operacao) {
			case 'soma':
				resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
				break;
			case 'subtracao':
				resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
				break;
			default:
				resultado = 0;
		}

		console.log(resultado);

		/*
		if (this.state.operacao === 'soma') {
			resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
		}
		else {
			resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
		}
		console.log(this.state.operacao + resultado);
		*/

	}

	atualizaValor(nomeCampo, numero) {
		const obj = {}
		obj[nomeCampo] = numero;
		this.setState(obj);
	}

	atualizaOperacao(operacao) {
		//propriedade:parametro
		this.setState({ operacao });
		console.log(operacao);
	}

	render() {
		return (
			<View>
				<Entrada 
					num1={this.state.num1} 
					num2={this.state.num2} 
					atualizaValor={this.atualizaValor}
				/>
				<Operacao operacao={this.state.operacao} atualizaOperacao={this.atualizaOperacao} />
				<Comando acao={this.calcular} />
			</View>
		);
	}
}	

/* quando a chave = atributo não precisa fazer mais assim:
export { Topo: Topo };
*/

export { Painel };