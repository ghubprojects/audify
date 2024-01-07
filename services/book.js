import * as httpRequest from './api';

const endpoint = 'book';

export const getAllAsync = async () => {
    const res = await httpRequest.get(endpoint + '/getCategoryList');
    return res;
};

export const getRecommendBooksAsync = async (accessToken) => {
    const res = await httpRequest.getWithToken(endpoint + '/getRecommendBook', accessToken);
    return res;
};

export const getBestSellerAsync = async () => {
    const res = await httpRequest.get(endpoint + '/getBestSellerBook');
    return res;
};

export const getRecentBooksAsync = async (accessToken) => {
    const res = await httpRequest.getWithToken(endpoint + '/getRecentBook', accessToken);
    return res;
};

export const getNewReleasesAsync = async () => {
    const res = await httpRequest.get(endpoint + '/getNewestBook');
    return res;
};

export const getTrendingBooksAsync = async () => {
    const res = await httpRequest.get(endpoint + '/getTrendingBook');
    return res;
};

export const searchBooks = async (keyword) => {
    const res = await httpRequest.getWithParams(endpoint + '/searchBook', {
        params: { keyword }
    });
    return res;
};

export const getFullBookInfo = async (id, accessToken) => {
    return await httpRequest.getWithToken(`${endpoint}/getFullBook/${id}`, accessToken);
};

export const getByIdAsync = async (id) => {
    return await httpRequest.get(`${endpoint}/getBook/${id}`);
};
