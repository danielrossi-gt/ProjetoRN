//Import
import React from 'react';
import { Text, AppRegistry, View, TouchableOpacity } from 'react-native';

//Formatações
const Estilos = {
  
  principal: {
    paddingTop: 40
  },
  botao: {
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1D8EB8',
    borderWidth: 3,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width:0, heigth: 2},
    shadowOpacity: 0.4
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }

};

const botaoPressionado = () => {
  alert('Botão pressionado');
}

//Criar o componente
const App = () => {
  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={principal}>

      <TouchableOpacity style={botao}>
        <Text style={textoBotao}>Clique aqui</Text>
      </TouchableOpacity>

    </View>

  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
