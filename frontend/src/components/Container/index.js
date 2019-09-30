import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styles';

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
    return (
      <StyledContainer>
        <div>
          <h3>{loading.toString()}</h3>
          <h3>{loading.toString()}</h3>
          <h3>{loading.toString()}</h3>
          <h3>{loading.toString()}</h3>
          <h3>{loading.toString()}</h3>
          <h3>{loading.toString()}</h3>
          <h3>{loading.toString()}</h3>
          <h3>{loading.toString()}</h3>

          <h3>{loading.toString()}</h3>
          <h3>{loading.toString()}</h3>
          <h3>{loading.toString()}</h3>
          <h3>{loading.toString()}</h3>
          <h3>{loading.toString()}</h3>
          <h3>{loading.toString()}</h3>
        </div>
      </StyledContainer>
    );
  }
}

Container.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Container;
