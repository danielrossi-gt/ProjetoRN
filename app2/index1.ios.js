//Import
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Formatações
const Estilos = {
  estiloTexto : {
    fontSize: 30,
    backgroundColor: '#08509B',
    height: 80
  }
};

//Criar o componente
const App = () => {

  return (
    <Text style={ Estilos.estiloTexto }>Frases do Dia</Text>

  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
