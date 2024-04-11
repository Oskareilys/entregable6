import React from 'react'
const RatingStar = ({ rating }) => {
    const getStarIcon = (isFilled) => (
        isFilled ? <span className="hotelcard__star--filled">&#9733;</span> : <span className="hotelcard__star--empty">&#9734;</span>
      );
    
      const renderStars = () => {
        const stars = [];
        for (let x = 0; x < 5; x++) {
          stars.push(getStarIcon(x < Math.floor(rating?.rating)));
          
        }
        return stars;
      };
  return (
    <p className="hotelcard__rating">{renderStars()}</p>
  )
}

export default RatingStar