import React, { useContext } from "react";
import { StarRatingContext } from "./StarsRatingFunc";
function Star({ value }) {
  const {
    emptyColor,
    fillColor,
    height,
    hover,
    rating,
    setHover,
    setRating,
    width,
  } = useContext(StarRatingContext);
  return (
    <div
      className="star"
      onClick={() => setRating(value)}
      onMouseEnter={() => setHover(value)}
      onMouseLeave={() => setHover(null)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-rating={value}
        fill={value <= (hover || rating) ? fillColor : emptyColor}
        height={height}
        width={width}
        viewBox="0 0 1280 1216"
      >
        <path d="M589 156.2c-33.2 75.5-73.6 167.4-89.8 204.3-16.1 36.8-29.5 67.1-29.7 67.3-.2.2-30.8 2.5-68.2 5.2-37.3 2.7-105.4 7.6-151.3 10.9-45.9 3.4-108.7 7.9-139.5 10.1-30.8 2.2-58.5 4.3-61.5 4.6l-5.4.6 4.9 4.7c2.8 2.5 33.6 30 68.4 61.1 34.9 31.1 80.6 71.8 101.6 90.5 126.7 113 156 139.1 157.2 140 1.7 1.3 7.4-22.8-54.2 226.5-25.6 103.6-46.4 188.7-46.3 189 .2.4 86.9-49.9 192.8-111.7 105.8-61.8 193.1-112.2 194-112 .8.2 39.8 24.2 86.5 53.2 46.8 29.1 116.5 72.4 155 96.3 38.5 23.9 81.1 50.4 94.7 58.8 13.5 8.5 24.9 15.4 25.3 15.4.4 0 .4-1.7 0-3.8-.6-3.4-41.1-189.7-77.6-356.8-8.7-40.2-15.9-73.8-15.9-74.7 0-1.3 64.9-56.3 299.7-254.2 25.8-21.7 26.1-22 23-22.7-1.8-.4-101.1-10.4-220.7-22.3s-218.4-22-219.6-22.5c-1.5-.6-6.2-11.1-19.9-44.6-9.8-24.2-41.2-101.3-69.7-171.4-28.5-70.1-56.4-138.8-62-152.5-5.6-13.8-10.4-25.3-10.8-25.8-.3-.4-27.8 61-61 136.5z" />
      </svg>
    </div>
  );
}
export default Star;
