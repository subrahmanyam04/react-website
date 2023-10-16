import * as actionType from '../Actions/actionType';
 

export const setData4 = (data4) => {
    console.log('Data  setData2 action: xxxxxxxxxxxxxxxxxxx', data4); // Add this console.log statement
    return {
      type: actionType.SET_DATA_4,
      payload: data4,
      
    };
  }; 