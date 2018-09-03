import React, { Component } from 'react';
import { Button, TextInput, View, StyleSheet, ImageBackground, Text  } from 'react-native';
import { connect } from 'react-redux';
import { 
    modificaEmail, 
    modificaSenha, 
    modificaNome, 
    cadastraUsuario 
} from '../actions/AutenticacaoActions';

class formCadastro extends Component {

    _cadastraUsuario() {
        /*const nome = this.props.nome;
        const email = this.props.email;
        const senha = this.props.senha; */

        const { nome, email, senha } = this.props;
        this.props.cadastraUsuario( {nome, email, senha} );
    }

    render() {
        return (
            <ImageBackground  style={{ flex:1}} source={require("../img/bg.png")} >
                <View style={ styles.viewPrincipal } >
                    <View style={ styles.viewForm } > 
                        <TextInput 
                            value={this.props.nome} 
                            style={ styles.input } 
                            placeholder="Nome" 
                            placeholderTextColor="#FFF" 
                            onChangeText={ texto => this.props.modificaNome(texto) } />
                        <TextInput 
                            value={this.props.email} 
                            style={ styles.input } 
                            placeholder="E-Mail" 
                            placeholderTextColor="#FFF" 
                            onChangeText={ texto => this.props.modificaEmail(texto) } />
                        <TextInput 
                            secureTextEntry 
                            value={this.props.senha} 
                            style={ styles.input } 
                            placeholder="Senha" 
                            placeholderTextColor="#FFF" 
                            onChangeText={ texto => this.props.modificaSenha(texto) }/>
                        <Text style={{ fontSize:18, color:'#FF0000'}}>{this.props.erroCadastro}</Text>
                    </View>
                    <View style={ styles.viewCadastrar }>
                        <View style= { styles.viewButton } >
                            <Button 
                                title="Cadastrar" 
                                onPress={ () => this._cadastraUsuario() } />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }

}

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro   
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

export default connect(
    mapStateToProps, { 
        modificaEmail,
        modificaSenha, 
        modificaNome,
        cadastraUsuario
     })(formCadastro);