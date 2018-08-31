import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, StyleSheet, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

const formLogin = props => {
    console.log(props);
    return (
        <ImageBackground style={{ flex:1}} source={require("../img/bg.png")} >
            <View style={ styles.principal }>
                <View style={ styles.topo }>
                    <Text style={ styles.titulo }>WhatsApp Clone</Text>
                </View>
                <View style={ styles.corpo }>
                    <TextInput value={ props.email } style={ styles.input } placeholder="E-mail" placeholderTextColor="#FFF" onChangeText={ texto => props.modificaEmail(texto) } />
                    <TextInput secureTextEntry value={ props.senha } style={ styles.input } placeholder="Senha" placeholderTextColor="#FFF" onChangeText={ texto => props.modificaSenha(texto)}/>
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
        </ImageBackground>
    );
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)

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
        height: 45,
        color: "#FFF"
    },
    texto: {
        fontSize: 20,
        color: "#FFF"
    },
    viewButton: {
        backgroundColor: "#115E54"
    },
    titulo: {
        fontSize: 25,
        backgroundColor: "transparent",
        color: "#FFF"
    }
    

});

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(formLogin);