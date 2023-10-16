import * as actionType from '../Actions/actionType';
const initialState = {
    data3: [],
   
  };
  
  // Reducer
  const Reducer3 = (state = initialState, action) => {
    switch (action.type) {
      case actionType.SET_DATA_3:
        return {
          ...state,
          data3: action.payload,
        };
     
      default:
        return state;
    }
  };
  
  export default Reducer3;