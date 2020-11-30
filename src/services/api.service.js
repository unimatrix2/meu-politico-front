import axios from 'axios';

import { requestInterceptor, errorInterceptor } from './interceptors/api.interceptors';

const api = axios.create({});

api.interceptors.request.use(requestInterceptor);

api.interceptors.response.use(res => res, errorInterceptor);