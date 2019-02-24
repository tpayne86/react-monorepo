import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../../elements/Alert';

const AlertFallback = ({
  hasAlert,
  children,
  type,
  alertTitle,
  alertDescription,
  closable,
  onClose,
}) => (
  <React.Fragment>
    {hasAlert === true ? (
      <div className="flex flex--center padding padding--lg">
        <Alert
          message={alertTitle}
          description={alertDescription}
          type={type}
          closable={closable}
          onClose={onClose}
        />
      </div>
    ) : (
      children()
    )}
  </React.Fragment>
);

AlertFallback.propTypes = {
  hasAlert: PropTypes.bool.isRequired,
  children: PropTypes.func,
  type: PropTypes.string,
  alertTitle: PropTypes.string,
  alertDescription: PropTypes.string,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
};
AlertFallback.defaultProps = {
  type: 'error',
  alertTitle: 'Some Error Occured. Please try again',
  alertDescription: '',
  closable: false,
  onClose: () => {},
  children: () => {},
};

export default AlertFallback;
