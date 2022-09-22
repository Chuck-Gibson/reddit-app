import PropTypes from 'prop-types';

export const SubmitButton = ({ _className, handleSubmit, children }) => {
  return (
    <>
      <button
        onClick={handleSubmit}
        className={_className}
      >
        {children}
      </button>
    </>
  );
};

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  _className: PropTypes.string,
};
