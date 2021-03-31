import React from "react";

import '../../../../css/parts/SubmitReview.css';

export default function SubmitReview({setVoteCount, voteCount, setUserReview, sendReviewFunc}) {
  return (
    <div className="submit-review-wrapper">
      <div className="review-count">
        <div className="review-count-label">თქვენი შეფასება:</div>
        <div className="review-stars">
          <div className={(voteCount >= 1) ? "star-div star-active" : "star-div"} id="my-review-star-1" onClick={() => setVoteCount(1)}></div>
          <div className={(voteCount >= 2) ? "star-div star-active" : "star-div"} id="my-review-star-2" onClick={() => setVoteCount(2)}></div>
          <div className={(voteCount >= 3) ? "star-div star-active" : "star-div"} id="my-review-star-3" onClick={() => setVoteCount(3)}></div>
          <div className={(voteCount >= 4) ? "star-div star-active" : "star-div"} id="my-review-star-4" onClick={() => setVoteCount(4)}></div>
          <div className={(voteCount >= 5) ? "star-div star-active" : "star-div"} id="my-review-star-5" onClick={() => setVoteCount(5)}></div>
        </div>
      </div>

      <textarea onChange={(e) => {setUserReview(e.target.value)}} rows='10' cols='50' className='user-review' type="text-field"/>

      <button className='submit-user-review' onClick={() => sendReviewFunc()}>დამატება</button>
    </div>
  );
}
