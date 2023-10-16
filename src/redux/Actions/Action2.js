import * as actionType from '../Actions/actionType';
 

export const setData2 = (data2) => {
    console.log('Data  setData2 action: xxxxxxxxxxxxxxxxxxx', data2); // Add this console.log statement
    return {
      type: actionType.SET_DATA_2,
      payload: data2,
      
    };
  }; 