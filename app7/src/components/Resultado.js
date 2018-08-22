import React from 'react';
import {View, Text} from 'react-native';
import Visor from './Visor';


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

const Resultado = props => (
	<Visor resultado={props.resultado} />
)

/* quando a chave = atributo não precisa fazer mais assim:
export { Topo: Topo };
*/

export { Resultado };