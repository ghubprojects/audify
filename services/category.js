import * as httpRequest from './api';

const endpoint = 'category';

export const getAllAsync = async () => {
    const res = await httpRequest.get(endpoint + '/getCategoryList');
    return res;
};

// export const getPaginationAsync = async (
//     limit = table.INIT_RECORD_PER_PAGE,
//     offset = table.INIT_OFFSET_VALUE
// ) => {
//     return await httpRequest.get(endpoint, {
//         params: { limit, offset }
//     });
// };

// export const getFilteringAsync = async (keyword = '') => {
//     return await httpRequest.get(endpoint, {
//         params: { keyword }
//     });
// };

// export const getFilteringAndPaginationAsync = async (
//     keyword = '',
//     limit = table.INIT_RECORD_PER_PAGE,
//     offset = table.INIT_OFFSET_VALUE
// ) => {
//     return await httpRequest.get(endpoint, {
//         params: { keyword, limit, offset }
//     });
// };

export const getByIdAsync = async (id) => {
    return await httpRequest.get(`${endpoint}/${id}`);
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
