import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {
        let config = {
            apiKey: "AIzaSyDsAKZBtGA2dXnMdrbrG1VM_jGAeQEfJjU",
            authDomain: "whatsapp-clonedr.firebaseapp.com",
            databaseURL: "https://whatsapp-clonedr.firebaseio.com",
            projectId: "whatsapp-clonedr",
            storageBucket: "whatsapp-clonedr.appspot.com",
            messagingSenderId: "696370245057"
          };
          firebase.initializeApp(config);        
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Routes />
            </Provider>
        );
    }
};

export default App;
