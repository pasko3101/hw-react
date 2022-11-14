import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import StarList from "./StarRatingList";
export const StarRatingContext = createContext();
export default function StarRating({
  defaultState,
  emptyColor,
  fillColor,
  height,
  maxValue,
  onChangeHover,
  onChangeValue,
  readOnly,
  width,
}) {
  const [rating, setRating] = useState(defaultState);
  const [hover, setHover] = useState(null);
  const setRatingFn = (value) => {
    if (readOnly) return;
    setRating(value);
    onChangeValue(value);
  };
  const setHoverFn = (value) => {
    if (readOnly) return;
    setHover(value);
    onChangeHover(value);
  };
  return (
    <>
      <StarRatingContext.Provider
        value={{
          emptyColor,
          fillColor,
          height,
          hover,
          rating,
          setHover: setHoverFn,
          setRating: setRatingFn,
          width,
          maxValue,
        }}
      >
        <>
          <StarList />
        </>
      </StarRatingContext.Provider>
    </>
  );
}
StarRating.propTypes = {
  defaultState: PropTypes.number,
  emptyColor: PropTypes.string,
  fillColor: PropTypes.string,
  height: PropTypes.number,
  maxValue: PropTypes.number,
  onChangeHover: PropTypes.func,
  onChangeValue: PropTypes.func,
  readOnly: PropTypes.bool,
  width: PropTypes.number,
};
StarRating.defaultProps = {
  defaultState: 0,
  emptyColor: "grey",
  fillColor: "gold",
  height: 53,
  maxValue: 5,
  onChangeHover: () => {},
  onChangeValue: () => {},
  readOnly: false,
  width: 53,
};
