import React from 'react';
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

const Painel = props => (
	<View>
		<Entrada 
			num1={props.num1} 
			num2={props.num2} 
			atualizaValor={props.atualizaValor}
		/>
		<Operacao 
			operacao={props.operacao} 
			atualizaOperacao={props.atualizaOperacao} 
		/>
		<Comando acao={props.calcular} />
	</View>
);

/* quando a chave = atributo não precisa fazer mais assim:
export { Topo: Topo };
*/

export { Painel };
