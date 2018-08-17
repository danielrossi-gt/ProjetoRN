import React from 'react';
import { Picker, StyleSheet } from 'react-native';

export default props => (
	<Picker styles={styles.operacao}>
		<Picker.Item label='Soma' values='+' />
		<Picker.Item label='Subtração' values='-' />
	</Picker>
);

const styles = StyleSheet.create({
	operacao: {
		marginTop: 15,
		marginBottom: 15
	}

})
