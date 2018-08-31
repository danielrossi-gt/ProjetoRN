import React from 'react';
import { Button, TextInput, View, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome } from '../actions/AutenticacaoActions';

const formCadastro = props => (
    <ImageBackground  style={{ flex:1}} source={require("../img/bg.png")} >
        <View style={ styles.viewPrincipal } >
            <View style={ styles.viewForm } > 
                <TextInput value={props.nome} style={ styles.input } placeholder="Nome" placeholderTextColor="#FFF" onChangeText={ texto => props.modificaNome(texto) } />
                <TextInput value={props.email} style={ styles.input } placeholder="E-Mail" placeholderTextColor="#FFF" onChangeText={ texto => props.modificaEmail(texto) } />
                <TextInput secureTextEntry value={props.senha} style={ styles.input } placeholder="Senha" placeholderTextColor="#FFF" onChangeText={ texto => props.modificaSenha(texto) }/>
            </View>
            <View style={ styles.viewCadastrar }>
                <View style= { styles.viewButton } >
                    <Button title="Cadastrar" onPress={ () => false } />
                </View>
            </View>
        </View>
    </ImageBackground>
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
        height: 45,
        color: "#FFF"
    },
    viewButton: {
        backgroundColor: "#115E54"
    }
});

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome })(formCadastro);