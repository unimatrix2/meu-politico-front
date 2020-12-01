import axios from 'axios';

import { reqInterceptor, errorInterceptor } from './interceptors/api.interceptors';

const api = axios.create({});

api.interceptors.request.use(reqInterceptor);

api.interceptors.response.use(res => res, errorInterceptor);