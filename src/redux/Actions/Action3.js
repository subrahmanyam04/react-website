import * as actionType from '../Actions/actionType';
 

export const setData3 = (data3) => {
    console.log('Data  setData2 action: xxxxxxxxxxxxxxxxxxx', data3); // Add this console.log statement
    return {
      type: actionType.SET_DATA_3,
      payload: data3,
      
    };
  }; 