//contador

//reducers
function reducers(state = 0, action) {

	switch(action.type) {
  	case "INCREMENTO" : 
    	return state + 1;
      
  	case "DECREMENTO" :
  		return state - 1;
      
    case "ZERAR_CONTADOR" :
    	return 0;
    default:
    	return state;
  }

  return state;
  
}

//criar store
let store = Redux.createStore(reducers);

//recuperar estado
document.write(store.getState() + "<br/>");

//
store.dispatch({ type: 'INCREMENTO' });
store.dispatch({ type: 'INCREMENTO' });
store.dispatch({ type: 'INCREMENTO' });
store.dispatch({ type: 'INCREMENTO' });

//recuperar estado
document.write(store.getState() + "<br/>");


store.dispatch({ type: 'DECREMENTO' });

//recuperar estado
document.write(store.getState() + "<br/>");


store.dispatch({ type: 'ZERAR_CONTADOR' });

//recuperar estado
document.write(store.getState() + "<br/>");