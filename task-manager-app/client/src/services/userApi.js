import axios from "axios";

export const userLogin = async (username, password) => {
    try {
        const response = await axios.post(`http://localhost:54321/login`, JSON.stringify({ username, password }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch(err) {
        console.error(err.message);
        return [];
    }
}

export const userRegister = async (username, password) => {
    try {
        const response = await axios.post(`http://localhost:54321/register`, JSON.stringify({ username, password }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch(err) {
        console.error(err.message);
        return [];
    }
}

export const getUserDetails = async (username) => {
    try {
        const response = await axios.get(`http://localhost:54321/user/${username}`);
        return response.data;
    } catch(err) {
        console.error(err.message);
        return [];
    }
}

export const updateUserDetails = async (username, email, first_name, last_name, date_of_birth) => {
    try {
        const response = await axios.post(`http://localhost:54321/user/${username}`, JSON.stringify({ email, first_name, last_name, date_of_birth }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch(err) {
        console.error(err.message);
        return [];
    }
}