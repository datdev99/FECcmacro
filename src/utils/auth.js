// utils/auth.js
const TOKEN_NAME = 'Token';
const USERID = 'userId';
const REFRESH_TOKEN = 'RefreshToken';

export const setToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_NAME);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export const getUserID = () => {
  return localStorage.getItem(USERID);
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN);
};