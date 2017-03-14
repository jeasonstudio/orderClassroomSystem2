import axios from 'axios';
import env from '../config/env';

let util = {

};

const ajaxUrl = env === 'development' ? null : env === 'production' ? 'http://test-ocs.kalen.site/' : 'https://debug.url.com';

// if (env === 'development') {
axios.defaults.withCredentials = true
// }

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000,
    transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
    }],
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

export default util;