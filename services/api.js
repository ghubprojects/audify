import axios from 'axios';
import SyncStorage from 'sync-storage';

const authToken = SyncStorage.get('authToken');
const request = axios.create({
    baseURL: 'https://da31-1-53-8-79.ngrok-free.app/api/',
    // headers: {
    //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtrMTllbGV2YW5odXlAZ21haWwuY29tIiwidXNlcklkIjoiZWI4OTEwYjktNmEzNS00ZjkwLWJkMDEtMDgwZGU2NTBhOTkzIiwiaWF0IjoxNzAzMzgyNzg0fQ.GJAYG4qtbJ6iDD_zDcxbo9TBU5SLG9eRglkoxORFLeU`
    // }
    headers: authToken ? { Authorization: `Bearer ${authToken}` } : undefined
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
