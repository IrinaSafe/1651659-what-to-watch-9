import React, { useState } from 'react';

const ratingValues: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function FormReview(): JSX.Element {
  const [rating, setRating] = useState(0);

  const [review, setReview] = useState('');

  return (
    <div className="add-review">
      <form action="#" className="add-review__htmlForm">
        <div className="rating">
          <div className="rating__stars">
            {
              ratingValues.map((item) => (
                <React.Fragment key={item}>
                  <input
                    className="rating__input"
                    type="radio"
                    name="rating"
                    value={item}
                    id={`star-${item}`}
                    checked={item === rating}
                    onChange = {(evt) => setRating(Number(evt.target.value))}
                  />
                  <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
                </React.Fragment>
              ))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={review} onChange={(evt) => setReview(evt.target.value)}
          >
          </textarea>

          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormReview;
