import * as httpRequest from './api';

const endpoint = 'user';

export const login = async (email, password) => {
    const response = await httpRequest.post(endpoint + '/login', { email, password });
    //console.log("userService " + response.data.Message);
    return response;
};
// export const login = async (email, password) => {
//     try {
//         console.log(email, password);
//         const response = await httpRequest.post(endpoint + '/login', { email, password });
//         console.log(response);
//         return response;
//     } catch (error) {
//         console.log('1');
//         console.log(error);
//     }
// }
export const register = async (email, password, firstName, lastName) => {
    const response = await httpRequest.post(endpoint + '/register', {
        email,
        password,
        firstName,
        lastName
    });
    //console.log("userService " + response.data.Message);
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
    //const response = await httpRequest.post(endpoint + '/resetPassword', { newPassword });
    const response = await httpRequest.postWithToken(
        endpoint + '/resetPassword',
        { newPassword },
        authToken
    );
    return response;
};
export const getUserInfo = async (accessToken) => {
    return await httpRequest.get(endpoint + '/getInfo', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
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
// export const changeUserInfo = async (firstName, lastName, accessToken) => {
//     const response = await httpRequest.post(
//         endpoint + '/changeInfo',
//         {
//             firstName,
//             lastName
//         },
//         {
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             }
//         }
//     );
//     return response;
// };
