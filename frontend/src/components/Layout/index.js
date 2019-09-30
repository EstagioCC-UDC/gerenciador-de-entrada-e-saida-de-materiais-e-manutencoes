import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../Header';
import items from './items';

import { StyledLayout, Menu, MenuItem, ApplicationContainer } from './styles';

class Layout extends Component {
  state = {
    isMenuOpen: false,
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleToggleMenu = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };

  handleResize = () => {
    const width = window.innerWidth;
    if (width <= 1000) {
      this.setState({ isMenuOpen: false });
    } else {
      this.setState({ isMenuOpen: true });
    }
  };

  render() {
    const { children } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <StyledLayout>
        <Menu isMenuOpen={isMenuOpen}>
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
        <ApplicationContainer>
          <Header onToggleMenu={this.handleToggleMenu} />
          {React.Children.map(children, child => child)}
        </ApplicationContainer>
      </StyledLayout>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Layout.defaultProps = {
  children: [],
};

export default Layout;
