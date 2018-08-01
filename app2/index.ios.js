//Import
import React from 'react';
import { Text, AppRegistry, View, Image } from 'react-native';

//Formatações
const Estilos = {
  
  principal: {
    paddingTop: 40
  },
  imagem: {
    justifyContent: 'flex-end',
    paddingBottom: 5
  }
};

//Criar o componente
const App = () => {
  const { principal, imagem } = Estilos;

  return (
    <View style={principal}>

      <Image style={imagem} source={require('./imgs/uvas.png')} >
        <Text>Legenda para a foto</Text>
      </Image>

    </View>

  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
