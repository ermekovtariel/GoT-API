const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_PREFIX = '/api/web/v1';

export { BASE_URL };

export const AUTH = `${BASE_URL}/api/v1/auth/`;
export const USER_APPLICATION_FORM = `${BASE_URL}${API_PREFIX}/application/form/`;
