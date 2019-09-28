import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../Header';
import items from './items';

import { StyledLayout, Menu, MenuItem } from './styles';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Menu>
        <span>
          <h3>GESMM</h3>
        </span>
        <div>
          {items.map((item, index) => (
            <Link to={item.route} key={String(index)}>
              <MenuItem>
                {React.createElement(item.icon)}
                {item.label}
              </MenuItem>
            </Link>
          ))}
        </div>
      </Menu>
      <>
        <Header />
        {React.Children.map(children, child => child)}
      </>
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

Layout.defaultProps = {
  children: [],
};

export default Layout;
