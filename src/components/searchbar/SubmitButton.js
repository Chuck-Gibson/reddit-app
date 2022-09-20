import PropTypes from "prop-types";

export const SubmitButton = ({ handleSubmit }) => {
  return (
    <>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

SubmitButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
