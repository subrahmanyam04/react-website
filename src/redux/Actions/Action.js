import * as actionType from '../Actions/actionType';


export const setData = (data) => {
  console.log('Data setData action:', data);
  
  return {
    type: actionType.SET_DATA,
    payload: data,
    
   
  };

};

export const setSelectedAboutCard = (selectedAboutCard) => {
  console.log("i am about card",selectedAboutCard)
  return {
    type: actionType.SET_SELECTED_ABOUT_CARD,
    payload: selectedAboutCard,
  };
};

export const setError = (error) => {
  return {
    type: actionType.SET_ERROR,
    payload: error,
  };
};

export const setSelectedDataId = (id) => {
  return {
    type: actionType.SET_SELECTED_DATA_ID,
    payload: id,
  };
};