import PropTypes from "prop-types";

export const Img = ({ src, alt, className }) => {
  return (
    <>
      <img
        loading="lazy"
        src={src}
        className={className}
        data-testid="image-component"
        style={{ width: "100%", borderRadius: 3 }}
      />
    </>
  );
};

// Img.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string,
//   className: PropTypes.string,
// };
