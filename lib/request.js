import axios from "axios";

const API_HOST = "https://api-ornull-list.herokuapp.com";

const getUrl = endpoint => API_HOST + endpoint;

export const post = async (endpoint, data) => {
    return axios.post(getUrl(endpoint), data, {
        headers: { "Content-Type": "application/json" }
    });
};

export const get = async (endpoint, authHeaders) => {
    const headers = authHeaders
        ? {
            headers: {
                'access-token': authHeaders['access-token'],
                client: authHeaders.client,
                uid: authHeaders.uid,
            }
        }
        : null;
    return axios.get(getUrl(endpoint), headers);
};
