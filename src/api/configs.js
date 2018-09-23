import store from '../store/';
import router from '../router';
import globalMethods from '../methods';

window.axios = require('axios');
window.axios.defaults.headers.common['Accept-Language'] = 'fa-IR';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';
// window.axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://api.3sootjobs.com' : 'https://beta-api.3sootjobs.com';
window.axios.defaults.baseURL = 'https://beta-api.3sootjobs.com';

/**
 * Before send request
 */
window.axios.interceptors.request.use((config) => {
    /**
     * Send Authorization params if need
     */
    if (config.headers.sendAuth !== false) {
        config.headers.Authorization = globalMethods.getCurrentToken();
    }
    delete config.headers['sendAuth'];
    return config;
});

/**
 * Error Handling after send request
 */
window.axios.interceptors.response.use(res => {
    if (res.headers.authorization !== undefined) {
        globalMethods.setGlobalToken(res.headers.authorization);
    }
    return res;
}, err => {
    /**
     * Token Black-listed
     */
    if (err.response.status === 401) {
        store.dispatch('resetToken');
        router.push({
            name: 'error',
            params: {
                id: 401
            }
        });
    }

    /**
     * Access Denied
     */
    if (err.response.status === 403) {
        router.push({
            name: 'error',
            params: {
                id: 403
            }
        });
    }

    /**
     * Service UnAvailable (Probably under Maintenance or Upgrade)
     */
    if (err.response.status === 503 && err.response.status === 500) {
        router.push({
            name: 'error',
            params: {
                id: 503
            }
        });
    }

    return Promise.reject(err);
});
