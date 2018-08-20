import React, { Component } from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

//Como não possui lógica JS, não necessita de return.
export default class Visor extends Component {

	constructor(props) {
		super(props);
		this.state = { resultado: '1234' };
	}

	render() {
		return (
			<View>
				<TextInput style={styles.txtInput}
					placeholder='Resultado'
					value = {this.state.resultado}
				/>
			</View>
		);
	}
}

/*O TextInput precisa de height no iOS senão ele não aparece*/
const styles = StyleSheet.create({
	txtInput: {
		height: 100,
		fontSize: 30
	}

})