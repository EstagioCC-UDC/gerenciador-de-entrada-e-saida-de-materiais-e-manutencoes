import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, Title } from './styles';

class Container extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <StyledContainer className="container-fluid">
        <div>
          <Title>{title}</Title>
          {React.Children.map(children, child => child)}
        </div>
      </StyledContainer>
    );
  }
}

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Container.defaultProps = {
  children: [],
};

export default Container;
