import PropTypes from "prop-types";

export const SearchInput = ({ handleChange, value }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search something..."
        role="search"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
