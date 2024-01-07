import * as httpRequest from './api';

const endpoint = 'category';

export const getAllAsync = async () => {
    const res = await httpRequest.get(endpoint + '/getCategoryList');
    return res;
};
