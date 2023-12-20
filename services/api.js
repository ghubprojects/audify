import axios from 'axios';

const request = axios.create({
    baseURL: 'https://00c8-113-190-233-237.ngrok-free.app/api/',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInVzZXJJZCI6IjFjMDQ5M2ZjLWYwZmEtNGFjOS04ODMxLTUxMGRhYTZlYzhhZSIsImlhdCI6MTcwMjg0Njg2MH0.pyQIZIlCEQnrQIYcI1N2Vu8KzuiIaPs3jswMSmtqlMw`
    }
});

export const get = async (url, configs = {}) => {
    const response = await request.get(url, configs);
    return response;
};

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
