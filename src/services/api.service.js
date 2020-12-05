import axios from 'axios';

import { reqInterceptor, errorInterceptor } from './interceptors/api.interceptor';

const api = axios.create({});

api.interceptors.request.use(reqInterceptor);

api.interceptors.response.use(res => res, errorInterceptor);

export default api;