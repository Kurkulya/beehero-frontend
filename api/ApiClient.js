import axios from 'axios';
import config from 'config/urls-config';
import { updateHeadersClient } from 'helpers/headers';

export default class ApiClient {
    constructor({ prefix = config.API_HOST } = {}) {
        this.prefix = prefix;
    }

    get(requestUrl, payload = {}, params) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'get',
            data: payload,
            params,
        });
    }

    put(requestUrl, payload = {}) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'put',
            data: payload,
        });
    }

    post(requestUrl, payload = {}) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'post',
            data: payload,
        });
    }

    delete(requestUrl) {
        return request({
            url: `${this.prefix}${requestUrl}`,
            method: 'delete',
        });
    }

    validateToken(requestUrl, headers) {
        return axios({ method: 'GET', url: `${this.prefix}${requestUrl}`, headers: { ...JSON.parse(headers) } })
            .then((response) => {
                if (response.data && response.data.data) {
                    response.data = response.data.data;
                }
                if (response.headers) {
                    updateHeadersClient(response.headers);
                }
                return response;
            }, (error) => {
                return { error };
            });
    }
}
const request = ({
    url, method, data, params = {},
}) => {
    return axios({
        method,
        url,
        params,
        data,
    })
        .then((response) => {
            if (response.headers) {
                updateHeadersClient(response.headers);
            }
            if (response.status >= 200 && response.status < 300) {
                if (response.data && response.data.data) {
                    response.data = response.data.data;
                }
                return response;
            }
        }).catch((xhr) => {
            if (xhr.response && xhr.response.headers) {
                updateHeadersClient(xhr.response.headers);
            }
            const response = { error: {} };
            response.error.statusCode = (xhr && xhr.response && xhr.response.status) || 500;
            response.error.status = 'error';
            response.error.toString = () => {
                let result = 'Bad response from server';
                if (xhr && xhr.response && xhr.response.data) {
                    const errors = xhr.response.data.errors || xhr.response.data.error;
                    if (errors && errors.full_messages) {
                        result = errors.full_messages.toString();
                    } else if (errors) {
                        result = errors.toString();
                    }
                } else {
                    result = xhr.message;
                }
                return result;
            };
            throw response;
        });
};
