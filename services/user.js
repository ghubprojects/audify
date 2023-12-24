import * as httpRequest from './api';

const endpoint = 'user';

export const login = async (email, password) => {
        const response = await httpRequest.post(endpoint + '/login', { email, password });
        //console.log("userService " + response.data.Message);
        return response;
}
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
        const response = await httpRequest.post(endpoint + '/register', { email, password, firstName, lastName });
        //console.log("userService " + response.data.Message);
        return response;
}