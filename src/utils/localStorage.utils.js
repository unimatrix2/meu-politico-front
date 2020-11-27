export const set = (tokenFromAPI) => localStorage.setItem('token', JSON.stringify(tokenFromAPI));

export const get = () => JSON.parse(localStorage.getItem('token'));

export const remove = () => localStorage.removeItem('token');