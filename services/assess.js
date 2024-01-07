import * as httpRequest from './api';

const endpoint = 'assess';

export const getByBookIdAsync = async (bookId, accessToken) => {
    const res = await httpRequest.getWithToken(endpoint + `/getAssess/${bookId}`, accessToken);
    return res;
};

export const addAsync = async (bookId, comment, rate, accessToken) => {
    console.log('create assess: ', bookId, comment, rate);
    return await httpRequest.postWithToken(
        endpoint + '/createAssess',
        { bookId, comment, rate },
        accessToken
    );
};

export const updateAsync = async (bookId, comment, rate, accessToken) => {
    console.log('update assess: ', bookId, comment, rate);
    return await httpRequest.postWithToken(
        endpoint + '/updateAssess',
        { bookId, comment, rate },
        accessToken
    );
};

export const removeByIdAsync = async (id) => {
    return await httpRequest.post(`${endpoint}/${id}`);
};
