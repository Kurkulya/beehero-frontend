import ApiClient from './ApiClient';
import Auth from './Auth';

export default function ({ apiPrefix } = {}) {
    const api = new ApiClient({ prefix: apiPrefix});
    return {
        auth: new Auth({apiClient: api}),
    };
}
