import axios from 'axios';
import env from '../config/env';

let util = {

};

const ajaxUrl = env === 'development' ?
    'http://scce.kalen25115.cn' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;