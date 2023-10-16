import * as actionType from '../Actions/actionType';
const initialState = {
    data4: [],
   
  };
  
  // Reducer
  const Reducer4 = (state = initialState, action) => {
    switch (action.type) {
      case actionType.SET_DATA_4:
        return {
          ...state,
          data4: action.payload,
        };
     
      default:
        return state;
    }
  };
  
  export default Reducer4;