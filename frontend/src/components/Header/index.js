import React from 'react';
import { FaPowerOff } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { getUserInfo, clearUserInfoAndTokens } from '../../services/userInfo';

import { StyledHeader } from './styles';
import history from '../../services/history';
import logout from './business';

const Header = () => {
  const userInfo = getUserInfo();

  const handleLogout = () => {
    logout().finally(() => {
      clearUserInfoAndTokens();
      history.push('/login');
      toast('Logout feito com sucesso!', { type: toast.TYPE.SUCCESS });
    });
  };

  return (
    <StyledHeader>
      <button type="button" onClick={handleLogout}>
        {userInfo && userInfo.given_name}
        <FaPowerOff />
      </button>
    </StyledHeader>
  );
};

export default Header;
