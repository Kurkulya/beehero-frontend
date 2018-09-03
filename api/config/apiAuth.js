import apiFactory from 'api';
import config from 'config/urls-config';

export default apiFactory({
    apiPrefix: config.API_HOST,
});
