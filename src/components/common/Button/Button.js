import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ handleClick, isLoading, _className, children }) => {
  return (
    <>
      <button
        onClick={handleClick}
        disabled={isLoading}
        className={_className}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  _className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
