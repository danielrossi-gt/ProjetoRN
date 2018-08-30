import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const formCadastro = props => (
    <View style={ styles.viewPrincipal } >
        <View style={ styles.viewForm } > 
            <TextInput value={props.nome} style={ styles.input } placeholder="Nome" />
            <TextInput value={props.email} style={ styles.input } placeholder="E-Mail" />
            <TextInput value={props.senha} style={ styles.input } placeholder="Senha" />
        </View>
        <View style={ styles.viewCadastrar }>
            <View style= { styles.viewButton } >
                <Button title="Cadastrar" onPress={ () => false } />
            </View>
        </View>
    </View>
);

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha   
    }
)

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

export default connect(mapStateToProps, null)(formCadastro);