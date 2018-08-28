import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

export default props => (
    <View style={ styles.viewPrincipal } >
        <View style={ styles.viewForm } > 
            <TextInput style={ styles.input } placeholder="Nome" />
            <TextInput style={ styles.input } placeholder="E-Mail" />
            <TextInput style={ styles.input } placeholder="Senha" />
        </View>
        <View style={ styles.viewCadastrar }>
            <View style= { styles.viewButton } >
                <Button title="Cadastrar" onPress={ () => false } />
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
	viewPrincipal: {
        flex: 1, 
        padding: 10,
    },
    viewForm: {
        flex: 4, 
        justifyContent: 'center'   
    },
	viewCadastrar: {
		flex: 1
    },
    input: {
        fontSize: 20, 
        height: 45
    },
    viewButton: {
        backgroundColor: "#115E54"
    }
});
