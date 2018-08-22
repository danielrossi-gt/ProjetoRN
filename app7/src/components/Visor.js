import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

//Como não possui lógica JS, não necessita de return.
export default props => (
	<View>
		<TextInput 
			style={styles.txtInput}
			placeholder='Resultado'
			editable={false}
			value = {props.resultado}
		/>
	</View>
);

/*O TextInput precisa de height no iOS senão ele não aparece*/
const styles = StyleSheet.create({
	txtInput: {
		height: 100,
		fontSize: 30
	}

})