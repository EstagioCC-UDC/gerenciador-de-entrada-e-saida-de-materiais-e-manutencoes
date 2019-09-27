const USER_INFO = 'USER_INFO';
const ACCESS_TOKEN = 'ACCESS_TOKEN';
const REFRESH_TOKEN = 'REFRESH_TOKEN';

/**
 * Returns the user info from local storage
 */
const getUserInfo = () => {
  const userInfo = localStorage.getItem(USER_INFO);
  return userInfo ? JSON.parse(userInfo) : null;
};

/**
 * Sets the user info in local storage
 * @param {Object} userInfo
 */
const setUserInfo = userInfo => {
  localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
};

/**
 * Sets the access token and refresh token in local storage
 * @param {String} accessToken
 * @param {String} refreshToken
 */
const setTokens = (accessToken, refreshToken) => {
  localStorage.setItem(ACCESS_TOKEN, accessToken);
  localStorage.setItem(REFRESH_TOKEN, refreshToken);
};

/**
 * Returns an object containing the access and refresh tokens
 */
const getTokens = () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  return {
    accessToken,
    refreshToken,
  };
};

/**
 * Clears the tokens and user info from the browser local storage
 */
const clearUserInfoAndTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem(USER_INFO);
};

export {
  getUserInfo,
  setUserInfo,
  setTokens,
  getTokens,
  clearUserInfoAndTokens,
};
