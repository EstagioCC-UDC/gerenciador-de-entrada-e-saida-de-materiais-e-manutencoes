import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, Title } from './styles';

class Container extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const { loading } = this.props;
    this.setState({ loading });
  }

  render() {
    const { loading } = this.state;
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
  loading: PropTypes.bool.isRequired,
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
