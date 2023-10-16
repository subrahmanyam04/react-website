// import {legacy_createStore as createStore} from 'redux';
// import rootReducer from './Reducers/rootReducer';


// export const store = createStore(rootReducer);
// console.log('i am store' , store)

// store.js
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './Reducers/rootReducer'; // Assuming you have a rootReducer if there are multiple reducers
 // You can use Redux Thunk for async actions

const store = createStore(rootReducer);

export default store;