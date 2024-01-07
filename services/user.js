import * as httpRequest from './api';

const endpoint = 'user';

export const login = async (email, password) => {
    const response = await httpRequest.post(endpoint + '/login', { email, password });
    return response;
};

export const register = async (email, password, firstName, lastName) => {
    const response = await httpRequest.post(endpoint + '/register', {
        email,
        password,
        firstName,
        lastName
    });
    return response;
};

export const sendResetCode = async (email) => {
    const response = await httpRequest.post(endpoint + '/sendResetCode', { email });
    return response;
};

export const verifyResetCode = async (email, code) => {
    const response = await httpRequest.post(endpoint + '/verifyResetCode', { email, code });
    return response;
};

export const resetPass = async (newPassword, authToken) => {
    const response = await httpRequest.postWithToken(
        endpoint + '/resetPassword',
        { newPassword },
        authToken
    );
    return response;
};

export const getUserInfo = async (accessToken) => {
    return await httpRequest.getWithToken(endpoint + '/getInfo', accessToken);
};

export const changeUserInfo = async (firstName, lastName, accessToken) => {
    const response = await httpRequest.postWithToken(
        endpoint + '/changeInfo',
        {
            firstName,
            lastName
        },
        accessToken
    );
    return response;
};
