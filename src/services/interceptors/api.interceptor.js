import { get, remove } from '../../utils/localStorage.utils';

export const reqInterceptor = config => {
    if (config.url.includes('/public')) { return config }

    const { token } = get();

    config.headers.Authorization = `Bearer ${token}`;
    return config;
};

export const errorInterceptor = error => {
    if (error.response.data.status === 401 && error.response.data.type === 'Auth-Token-Expired') {
      remove();
  
      window.location = '/?expired=true';
    }
  
    return Promise.reject(error);
};