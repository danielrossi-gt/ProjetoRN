import React from 'react';
import { View, StyleSheet } from 'react-native';


/*não precisa colocar o index.js*/
import { Topo /*pode usar alias: Topo as Teste*/ , Resultado, Painel } from './components';

export default props => (
  <View style={styles.topo} >
    <Topo />
    <Resultado />
    <Painel />
  </View>
);

const styles = StyleSheet.create({
  topo: {
    marginTop: 20
  }

}
);