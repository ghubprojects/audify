import axios from 'axios';

const request = axios.create({
    baseURL: 'https://ff31-42-113-220-68.ngrok-free.app/api'
});

/**
 * GET METHODS
 */

export const get = async (url) => {
    const response = await request.get(url);
    return response;
};

export const getWithParams = async (url, configs = {}) => {
    const response = await request.get(url, configs);
    return response;
};

export const getWithToken = async (url, authToken) => {
    const response = await request.get(url, {
        headers: authToken ? { Authorization: `Bearer ${authToken}` } : undefined
    });
    return response;
};

/**
 * POST METHODS
 */

export const post = async (url, configs = {}) => {
    const response = await request.post(url, configs);
    return response;
};
export const postWithToken = async (url, configs = {}, authToken) => {
    const response = await request.post(url, configs, {
        headers: authToken ? { Authorization: `Bearer ${authToken}` } : undefined
    });
    return response;
};

export default request;
