import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

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
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
};

export default App;
