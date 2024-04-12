import React from 'react'
import '../styles/CardReviews.css'
import RatingStar from '../HomePage/RatingStar'

const CardReviews = ({ review }) => {
  return (
    <article className='comment__container'>
    <h3 className='comment__name'>{review.user.firstName} {review.user.lastName}</h3>
      <p className='comment__detail'>{review.comment}</p>
      <div>
        <RatingStar
            rating = {review}
        />
      </div>
      
    </article>
  )
}

export default CardReviews