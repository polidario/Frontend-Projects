import axios from 'axios';

export const getData = async (username) => {
  try {
    const response = await axios.get(`http://localhost:54321/tasks/${username}`)
    return response.data
  } catch(err) {
    console.log(err.message)
    return [];  
  }
};