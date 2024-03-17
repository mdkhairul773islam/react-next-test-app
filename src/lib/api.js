import axios from 'axios';
import cookie from 'cookie';

const API = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to get the token from browser cookies
const getTokenFromCookie = (req) => {
    if (req && req.headers && req.headers.cookie) {
        const cookies = cookie.parse(req.headers.cookie);
        return cookies.token;
    }
    return null;
};

// Interceptor to add token to headers for each request
API.interceptors.request.use((config) => {
    const token = getTokenFromCookie(config.headers.cookie);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// GET method
export const get = async (url) => {
    try {
        const response = await API.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// POST method
export const post = async (url, data = {}) => {
    try {
        const response = await API.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// PUT method
export const put = async (url, data) => {
    try {
        const response = await API.put(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// DELETE method
export const remove = async (url) => {
    try {
        const response = await API.delete(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default API;
