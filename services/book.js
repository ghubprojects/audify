import * as httpRequest from './api';

const endpoint = 'book';

export const getAllAsync = async () => {
    const res = await httpRequest.get(endpoint + '/getCategoryList');
    return res;
};

export const getTop10BookRateAsync = async () => {
    const res = await httpRequest.get(endpoint + '/getTopBookRate');
    return res;
};

export const searchBooks = async (keyword) => {
    const res = await httpRequest.get(endpoint + '/searchBook', {
        params: { keyword }
    });
    return res;
};

export const getFullBookInfo = async (id) => {
    return await httpRequest.get(`${endpoint}/getFullBook/${id}`);
};

export const getByIdAsync = async (id) => {
    return await httpRequest.get(`${endpoint}/getBook/${id}`);
};

export const addAsync = async (data) => {
    return await httpRequest.post(endpoint, data);
};

export const updateAsync = async (data) => {
    return await httpRequest.put(endpoint, data);
};

export const removeByIdAsync = async (id) => {
    return await httpRequest.remove(`${endpoint}/${id}`);
};

export const removeMultipleAsync = async (ids) => {
    return await httpRequest.remove(endpoint, {
        data: ids
    });
};

export const removeAllAsync = async () => {
    return await httpRequest.remove(endpoint);
};
