import firebase from 'firebase';
import React, { Component } from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { pontuacao: 0 };
	}

	componentWillMount() {
	  // Initialize Firebase
	  var config = {
	    // Configuração do Firebase aqui
	  };
	  firebase.initializeApp(config);
	}

	salvarDados() {
		
		//var database = firebase.database();
		//database.ref("pontuacao").set("200");
		//database.ref("pontuacao").remove();

		var funcionarios = firebase.database().ref("funcionarios");

		//funcionarios.child("001").child("nome").set("Daniel");
		//funcionarios.child("001").child("nome").set("Daize");

		//funcionarios.child("001").remove();

		//funcionarios.remove();

		//funcionarios.push().child("nome").set("Daniel");

		funcionarios.push().set(
			{	
				nome: "Daize",
			 	idade: "40",
			 	email: "daize.dmoraes@gmail.com"
			}
		);

	}

	listarDados() {
		var pontuacao = firebase.database().ref("pontuacao");
		pontuacao.on("value", (snapshot) => {
			//alert( snapshot.val() );
			var pontos = snapshot.val();
			this.setState( {pontuacao: pontos } );
		});
	}

	render() {
		let { pontuacao } = this.state;

		return (
			<View style={ {marginTop: 30} }>
				<Button
					onPress= { () => { this.salvarDados(); }}
					title="Salvar Dados"
					color="#841584"
					accessibilityLabel="Salvar dados"
				/>
				
				<Button
					onPress= { () => { this.listarDados(); }}
					title="Listar Dados"
					color="#841584"
					accessibilityLabel="Listar dados"
				/>				
				
				<Text>{pontuacao}</Text>
			</View>
		);
	}

}

AppRegistry.registerComponent('firebaseTeste', () => App);
