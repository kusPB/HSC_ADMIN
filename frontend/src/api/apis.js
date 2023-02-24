
import axios from 'axios';
import jwt_decode from "jwt-decode";

const axiosJWT = axios.create();
const backend_url = 'http://localhost:5000';
const frontend_url = 'http://localhost:3000';

export const Auth = async (email, password) => {
    try {
        let result = await axios.post(`${backend_url}/api/login`, {
            email: email,
            password: password
        });
        return result;
    } catch (error) {
        window.location.href = 'http://localhost:3000';
        if (error.response) {
            console.log(error.response.data.msg);
            return error.response.data.msg;
        }
    }
}

export const Signup = async (name, email, password, confPassword) => {
    try {
        await axios.post(`${backend_url}/api/users`, {
            name: name,
            email: email,
            password: password,
            confPassword: confPassword
        });
        return "success";
    } catch (error) {
        window.location.href = 'http://localhost:3000';
        if (error.response) {
            return error.response.data.msg;
        }
    }
}


export const refreshToken = async () => {
    try {
        const response = await axios.get(`${backend_url}/api/token`);
        const decoded = jwt_decode(response.data.accessToken);
        const data = {
            'token':    response.data.accessToken,
            'name':     decoded.name,
            'exp':      decoded.exp
        }

        return data;

    } catch (error) {
        window.location.href = 'http://localhost:3000';
        if (error.response) {
            return 'failed';
        }
    }
}

export const getInstance = async(token) => {
    const response = await axiosJWT.get(`${backend_url}/api/getinstances`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return (response.data);
}

export const createInstance = async(instance, token) => {
    try {
        let result = await axios.post(`${backend_url}/api/createinstance`, {
            instance: instance
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return result;
    } catch (error) {
            window.location.href = frontend_url;
        if (error.response) {
            console.log(error.response.data.msg);
            return error.response.data.msg;
        }
    }
}

export const Logout = async () => {
    try {
        await axios.delete(`${backend_url}/api/logout`);
        window.location.href = frontend_url;
    } catch (error) {
        console.log(error);
    }
}