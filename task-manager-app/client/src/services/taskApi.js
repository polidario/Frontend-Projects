import axios from 'axios';

export const getAllTasks = async () => {
  try {
    const response = await axios.get(`http://localhost:54321/tasks`)
    return response.data
  } catch(err) {
    console.log(err.message)
    return [];
  }
};

export const getUserTasks = async (username) => {
  try {
    const response = await axios.get(`http://localhost:54321/tasks/${username}`)
    return response.data
  } catch(err) {
    console.log(err.message)
    return [];  
  }
};

export const postData = async (data) => {
  try {
    const response = await axios.post(`http://localhost:54321/tasks`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json"
      },
    });
    return response.data;
  } catch(err) {
    console.error(err.message);
    return []
  }
}

export const updateData = async (id, data) => {
  try {
    const response = await axios.put(`http://localhost:54321/tasks/${id}`, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    console.error(err.message);
    return [];
  }
}

export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:54321/tasks/${id}`);
    return response.data;
  } catch (err) {
    console.error(err.message);
    return [];
  }
}