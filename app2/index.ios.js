//Import
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

//Formatações
const Estilos = {
  
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  let numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  const frases = Array();
  frases[0] = 'Não existe caminho para a felicidade. Felicidadde é o caminho.';
  frases[1] = 'Você nunca sabe a força que tem. Até ter que ser forte.';
  frases[2] = 'Estou sempre alegre. Essa é a melhor maneira de resolver os problema da vida.';
  frases[3] = 'O tempo dura bastante para aqueles que sabem aproveitá-lo';
  frases[4] = 'Se você encontrar um caminho sem obstáculos, ele provavelmente não leva a lugar nenhum.';

  Alert.alert(frases[numeroAleatorio]);
};

//Criar o componente
const App = () => {
  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={principal}>

      <Image source={require('./imgs/logo.png')} />

      <TouchableOpacity 
        onPress={gerarNovaFrase}
        style={botao}>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>

    </View>

  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
