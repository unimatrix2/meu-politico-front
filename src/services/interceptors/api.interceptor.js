import { get, remove } from '../../utils/localStorage.utils';

export const reqInterceptor = config => {
    if (!config.url.includes('/privado') && !config.url.includes('/token')) { return config }

    const token = get();

    config.headers.Authorization = token.token;
    return config;
};

export const errorInterceptor = error => {
    if (error.response.data.status === 401 && error.response.data.type === 'Acesso-Expirado') {
      remove();
  
      window.location = '/?expired=true';
    }
  
    return Promise.reject(error);
};