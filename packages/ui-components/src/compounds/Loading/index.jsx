import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../elements/Spinner';

const Loading = ({ loading, children, size }) => (
  <React.Fragment>
    {loading === true ? (
      <div className="flex flex--center padding padding--lg">
        <Spinner visible={loading} size={size} />
      </div>
    ) : (
      children()
    )}
  </React.Fragment>
);

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.func,
  size: PropTypes.string,
};
Loading.defaultProps = {
  size: 'default',
  children: () => {},
};

export default Loading;
