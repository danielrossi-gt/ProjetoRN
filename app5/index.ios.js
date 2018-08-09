import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal.js';

export default class app5 extends Component {
  render() {
    return (
      <CenaPrincipal />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
