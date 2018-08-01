//Import
import React from 'react';
import { Text, AppRegistry, View, Button } from 'react-native';

//Formatações
const Estilos = {
  
  principal: {
    paddingTop: 40
  },

};

const botaoPressionado = () => {
  alert('Botão pressionado');
}

//Criar o componente
const App = () => {
  const { principal } = Estilos;

  return (
    <View style={principal}>

      <Button
        onPress={botaoPressionado}
        title="Clique Aqui"
        color="#841584"
        accessibilityLabel="Clique aqui"
      />

    </View>

  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
