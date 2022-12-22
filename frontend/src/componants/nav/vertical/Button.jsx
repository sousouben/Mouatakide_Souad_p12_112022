import React from "react";
import PropTypes from "prop-types";

/**
 * @function Button
 * @param {object} srcImg - Image source for the button.
 * @param {function} launch - Function to be called when the button is clicked.
 * @return {JSX} - JSX representation of a button element with an image.
 */
const Button = ({ srcImg, launch }) => {
  return (
    <li
      className="vn-container__bloc-nav__bloc-ul__list"
      style={{ listStyle: "none" }}
    >
      <button
        className="vn-container__bloc-nav__bloc-ul__list__button"
        onClick={launch}
      >
        <img
          src={srcImg}
          alt="icon"
          loading="lazy"
          className="vn-container__bloc-nav__bloc-ul__list__button__img"
        />
      </button>
    </li>
  );
};

Button.propTypes = {
  srcImg: PropTypes.string.isRequired,
  launch: PropTypes.func.isRequired,
};

export default Button;
