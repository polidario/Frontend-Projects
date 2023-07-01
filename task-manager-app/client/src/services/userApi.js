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