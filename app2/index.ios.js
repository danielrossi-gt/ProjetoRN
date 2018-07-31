//Import
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

//Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#08509B',
    height: 60,
    width: 60
//    paddingTop: 20,
//    color: '#FFF',
//    textAlign: 'center',
//    fontWeight: 'bold' // pode usar valoes entre 100 e 900
//    textDecorationLine: 'underline',
//    fontStyle: 'italic'
//    shadowColor: '#000',
//    shadowOffset: { width: 0, height: 2 },
//    shadowOpacity: 0.4,
//    shadowRadius: 2
  },
    estiloTexto2: {
    fontSize: 40,
    backgroundColor: '#2A48FA',
    height: 60,
    width: 60
  },
  estiloView: {
    backgroundColor: 'skyblue',
    height: 600,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  }

};

//Criar o componente
const App = () => {
  const { estiloTexto, estiloTexto2, estiloView } = Estilos;

  return (
    <View style={estiloView}>

      <Text style={estiloTexto}>A</Text>
      <Text style={estiloTexto2}>B</Text>
      <Text style={estiloTexto}>C</Text>
 
    </View>

  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);
