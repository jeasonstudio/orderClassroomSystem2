import axios from 'axios';
import env from '../config/env';

let util = {

};

const ajaxUrl = env === 'development' ? null : env === 'production' ? 'https://www.url.com' : 'https://debug.url.com';

if (env === 'development') {
    // axios.defaults.withCredentials = true
}

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;