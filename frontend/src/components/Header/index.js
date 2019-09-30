import React from 'react';
import { FaPowerOff, FaBars } from 'react-icons/fa';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { getUserInfo, clearUserInfoAndTokens } from '../../services/userInfo';

import { StyledHeader } from './styles';
import history from '../../services/history';
import logout from './business';

const Header = ({ onToggleMenu }) => {
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
      <button type="button" onClick={onToggleMenu} className="ripple">
        <FaBars />
      </button>
      <button type="button" onClick={handleLogout}>
        {userInfo && userInfo.given_name}
        <FaPowerOff />
      </button>
    </StyledHeader>
  );
};

Header.propTypes = {
  onToggleMenu: PropTypes.func.isRequired,
};

export default Header;
