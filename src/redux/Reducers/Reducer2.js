import * as actionType from '../Actions/actionType';
const initialState = {
    data2: [],
   
  };
  
  // Reducer
  const Reducer2 = (state = initialState, action) => {
    switch (action.type) {
      case actionType.SET_DATA_2:
        return {
          ...state,
          data2: action.payload,
        };
     
      default:
        return state;
    }
  };
  
  export default Reducer2;