import React from 'react';
import './custom-button.styles.scss';
import PropTypes from 'prop-types';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.string,
  isGoogleSignIn: PropTypes.bool
};

export default CustomButton;
