import axios from 'axios';

const baseURL = 'https://react-website-3700c-default-rtdb.firebaseio.com';
console.log('hi')


export const getAllData = async () => {
    try {
        
      const response = await axios.get(`${baseURL}/data.json`);
      console.log('i am response',response)
      const jsonData = response.data;
             console.log('i am json', jsonData)
      if (jsonData === null) {
        return [];
      } else {
        return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
      }
    } catch (error) {
      console.log('error occured')
    }
  };

  

  export const getcard2Data = async () => {
    try {
        
      const response = await axios.get(`${baseURL}/data1.json`);
      console.log('i am response xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',response)
      const jsonData = response.data;
  
      if (jsonData === null) {
        return [];
      } else {
        return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
      }
    } catch (error) {
      console.log('error occured')
    }
  };


  export const getcard3Data = async () => {
    try {
        
      const response = await axios.get(`${baseURL}/data2.json`);
      console.log('i am response xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',response)
      const jsonData = response.data;
  
      if (jsonData === null) {
        return [];
      } else {
        return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
      }
    } catch (error) {
      console.log('error occured')
    }
  };

  export const getcard4Data = async () => {
    try {
        
      const response = await axios.get(`${baseURL}/data3.json`);
      console.log('i am response xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',response)
      const jsonData = response.data;
  
      if (jsonData === null) {
        return [];
      } else {
        return Object.keys(jsonData).map((key) => ({ id: key, ...jsonData[key] }));
      }
    } catch (error) {
      console.log('error occured')
    }
  };