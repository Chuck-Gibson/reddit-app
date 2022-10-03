import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ handleClick, _className, children }) => {
  return (
    <>
      <button
        onClick={handleClick}
        className={_className}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  _className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
