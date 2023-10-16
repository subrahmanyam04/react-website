// import { combineReducers } from "redux";

// import Reducer1 from "../Reducers/Reducer1";
// // import Reducer2 from './Reducer2';
// const rootReducer = combineReducers({
//   Foryou : Reducer1,

// });
// console.log('root', Reducer1)
// export default rootReducer;

import { combineReducers } from "redux";
import Reducer1 from "../Reducers/Reducer1";
import Reducer2 from "./Reducer2";
import Reducer3 from "./Reducer3";
import Reducer4 from "./Reducer4";

const rootReducer = combineReducers({
   Reducer1,
   Reducer2,
   Reducer3,
   Reducer4
});

// Log the initial state of the reducer
console.log('Initial State of Reducer1:', Reducer1(undefined, {})); // Pass an empty action to get the initial state

export default rootReducer;
