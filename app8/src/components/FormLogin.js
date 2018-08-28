import React from 'react';
import { Button, Text, TextInput, View, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
    <View style={ styles.principal }>
        <View style={ styles.topo }>
            <Text style={{ fontSize: 25 }}>WhatsApp Clone</Text>
        </View>
        <View style={ styles.corpo }>
            <TextInput style={ styles.input } placeholder="E-mail" />
            <TextInput style={ styles.input } placeholder="Senha" />
            <TouchableHighlight
                onPress={ () => Actions.formCadastro() }
            >
                <Text style={ styles.texto }>
                    Ainda não tem cadastro? Cadastre-se!
                </Text>
            </TouchableHighlight>
        </View>
        <View style={ styles.rodape } >
            <View style={ styles.viewButton }>
                <Button title="Acessar" color="white" onPress={() => false} />
            </View>        
        </View>
    </View>
);

const styles = StyleSheet.create({
	principal: {
        flex: 1, 
        padding: 10
    },
    topo: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'        
    },
	corpo: {
		flex: 2
    },
    rodape: {
        flex: 2
    },
    input: {
        fontSize: 20, 
        height: 45
    },
    texto: {
        fontSize: 20
    },
    viewButton: {
        backgroundColor: "#115E54"
    }

});