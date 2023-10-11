import axios from 'axios';

const request = axios.create({
    baseURL: 'https://localhost:7244/api/v1/',
});

export const get = async (url, configs = {}) => {
    const response = await request.get(url, configs);
    return response;
}

export const post = async (url, configs = {}) => {
    const response = await request.post(url, configs);
    return response;
};

export const put = async (url, configs = {}) => {
    const response = await request.put(url, configs);
    return response;
};

export const remove = async (url, configs = {}) => {
    const response = await request.delete(url, configs);
    return response;
};

export default request;
