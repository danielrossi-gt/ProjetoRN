import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class BarraNavegacao extends Component {
  render() {
    return (
		<View style={styles.barraTitulo} >
			<Text style={styles.titulo}>ATM Consultoria</Text>
		</View>
    );
  }
}

const styles = StyleSheet.create({
  barraTitulo: {
    backgroundColor: '#CCC',
    padding: 30,
    height: 80
  },
  titulo: {
	flex: 1,
	fontSize: 18,
	textAlign: 'center',
	color: '#000'

  }

});
