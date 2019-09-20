const USER_INFO = 'USER_INFO';

/**
 * Returns the user info from local storage
 */
const getUserInfo = () => {
  const userInfo = localStorage.getItem(USER_INFO);
  return userInfo ? JSON.parse(userInfo) : null;
};

/**
 * Sets the user info in local storage
 * @param {*} userInfo
 */
const setUserInfo = userInfo => {
  localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
};

export { getUserInfo, setUserInfo };
