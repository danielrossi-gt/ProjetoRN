import React from 'react';
import { TextInput, StyleSheet} from 'react-native';

export default props => (

	<TextInput style={styles.numero} 
		value={ props.num }
	/>

);

/*O TextInput precisa de height no iOS senão ele não aparece*/
const styles = StyleSheet.create({
	numero: {
		width: 140,
		height: 80,
		fontSize: 20,
		backgroundColor: 'yellow'
	}
});
