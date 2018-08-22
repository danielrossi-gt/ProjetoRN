import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';


/*não precisa colocar o index.js*/
import { Topo /*pode usar alias: Topo as Teste*/ , Resultado, Painel } from './components';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = { num1: '', num2: '', operacao: 'soma', resultado: '' };
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

		this.setState({ resultado : resultado.toString() });

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
		return(
		  <View style={styles.topo} >
		    <Topo />
		    <Resultado resultado={this.state.resultado} />
		    <Painel 
		    	num1={this.state.num1}
		    	num2={this.state.num2}
		    	operacao={this.state.operacao}
		    	calcular={this.calcular}
		    	atualizaOperacao={this.atualizaOperacao}
		    	atualizaValor={this.atualizaValor}
		    />
		  </View>
		);
	}
};

const styles = StyleSheet.create({
  topo: {
    marginTop: 20
  }

}
);