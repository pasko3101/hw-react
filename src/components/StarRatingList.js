import React, { useContext } from "react";
import Star from "./Star";
import { StarRatingContext } from "./StarsRatingFunc";
function StarList() {
  const { maxValue } = useContext(StarRatingContext);
  return (
    <div className="star-rating">
      {[...Array(maxValue)].map((star, index) => {
        const value = index + 1;
        return <Star key={index} value={value} />;
      })}
    </div>
  );
}
export default StarList;
