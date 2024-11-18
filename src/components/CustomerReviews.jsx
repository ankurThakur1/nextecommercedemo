import React from 'react'

const CustomerReviews = ({ review }) => {
    const dateObj = new Date(review.date);
    const commentDate = dateObj.getDate();
    const commentMonth = dateObj.toLocaleString("default", {month: "long"})
    const commentYear = dateObj.getFullYear();
 
  return (
    <div className="w-1/2 border  mb-5 p-3 rounded-xl relative">
      <h4 className="text-[13px] font-bold">{review.reviewerName}</h4>
      <p className="text-[13px] ">{review.reviewerEmail}</p>
      <p className="absolute top-3 right-4 text-sm">Ratings: {review.rating}</p>
      <p className="text-lg font-bold">{review.comment}</p>
      <p className="text-xs text-gray-500">Reviewed in india on <span>{`${commentDate < 10 ? "0" + commentDate : commentDate} ${commentMonth} ${commentYear}`}</span></p>
    </div>
  )
}

export default CustomerReviews