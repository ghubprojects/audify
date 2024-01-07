import * as httpRequest from './api';

const endpoint = 'playlist';

export const getAllAsync = async (accessToken) => {
    const res = await httpRequest.getWithToken(endpoint + '/getPlaylistList', accessToken);
    return res;
};

export const getBooksAsync = async (playlistId, accessToken) => {
    return await httpRequest.getWithToken(`${endpoint}/getBooks/${playlistId}`, accessToken);
};

export const addAsync = async (name, accessToken) => {
    return await httpRequest.postWithToken(
        endpoint + '/createPlaylist',
        { name },
        accessToken
    );
};

export const addBookAsync = async (playlistId, bookId, accessToken) => {
    console.log('service', playlistId, bookId);
    return await httpRequest.postWithToken(
        endpoint + '/addBook',
        { playlistId, bookId },
        accessToken
    );
};

export const removeAsync = async (playlistId, accessToken) => {
    return await httpRequest.postWithToken(
        `${endpoint}/removePlaylist/${playlistId}`,
        accessToken
    );
};

export const removeBookAsync = async (playlistId, bookId, accessToken) => {
    return await httpRequest.postWithToken(
        endpoint + '/removeBook',
        { playlistId, bookId },
        accessToken
    );
};
