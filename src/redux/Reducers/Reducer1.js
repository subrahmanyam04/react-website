// reducer.js
import * as actionType from '../Actions/actionType';

const initialState = {
  data: []  ,
  error: '',
  selectedDataId: null,
  selectedAboutCard: [],
};

const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_DATA:
      const newStateSetData = {
        ...state,
        data: action.payload,
      };
      console.log('New state after SET_DATA:', newStateSetData);
      return newStateSetData;
    case actionType.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actionType.SET_SELECTED_DATA_ID:
      return {
        ...state,
        selectedDataId: action.payload,
      };

      case actionType.SET_SELECTED_ABOUT_CARD:
        // console.log('New state after SET_DATA:', pop);
        // console.log('New state after payload:', payload);
        const pop = {
          ...state,
          selectedAboutCard: action.payload,
        };
        console.log('New state after SET_DATA:', pop);
        return pop;
    
    default:
      return state;
  }
};

export default Reducer1;
