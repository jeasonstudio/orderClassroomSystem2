import axios from 'axios';
import env from '../config/env';

let util = {

};

const ajaxUrl = env === 'development' ?
    'http://test-ocs.kalen.site' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000,
    headers: {
        host: 'test-ocs.kalen.site'
    }
});

export default util;