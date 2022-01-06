import React from 'react'
import './_averageUserRating.scss'

const AverageUserRating = ({ data }) => {
  const totalReviews = data && data.length > 0 ? data.length : '0'

  const totalAverageRating = () => {
    let ratingData = data.map((rating) => rating.review.rating)
    if (data && data.length > 0) {
      const average = ratingData.reduce((a, b) => a + b) / ratingData.length
      return Math.round(average)
    }
  }

  /* Total per star rating  */
  const fiveStars = () => {
    let fiveStarData = data.filter((rating) => rating.review.rating === 100)
    return fiveStarData.length
  }
  const fourStars = () => {
    let fourStarData = data.filter((rating) => rating.review.rating === 80)
    return fourStarData.length
  }
  const threeStars = () => {
    let threeStarData = data.filter((rating) => rating.review.rating === 60)
    return threeStarData.length
  }
  const twoStars = () => {
    let twoStarData = data.filter((rating) => rating.review.rating === 40)
    return twoStarData.length
  }
  const oneStar = () => {
    let oneStarData = data.filter((rating) => rating.review.rating === 20)
    return oneStarData.length
  }

  /* Percentage calculations for bar chart */
  const fivePercentage = () => {
    return (100 * fiveStars()) / totalReviews
  }
  const fourPercentage = () => {
    return (100 * fourStars()) / totalReviews
  }
  const threePercentage = () => {
    return (100 * threeStars()) / totalReviews
  }
  const twoPercentage = () => {
    return (100 * twoStars()) / totalReviews
  }
  const onePercentage = () => {
    return (100 * oneStar()) / totalReviews
  }

  return (
    <div className="averageUserRating my-5">
      <span className="heading">Average User Rating</span>
      <div>
        {totalAverageRating() >= 0 ? (
          <i className="bi bi-star-fill" />
        ) : (
          <i className="bi bi-star" />
        )}
        {totalAverageRating() >= 21 ? (
          <i className="bi bi-star-fill" />
        ) : (
          <i className="bi bi-star" />
        )}
        {totalAverageRating() >= 41 ? (
          <i className="bi bi-star-fill" />
        ) : (
          <i className="bi bi-star" />
        )}
        {totalAverageRating() >= 61 ? (
          <i className="bi bi-star-fill" />
        ) : (
          <i className="bi bi-star" />
        )}
        {totalAverageRating() >= 81 ? (
          <i className="bi bi-star-fill" />
        ) : (
          <i className="bi bi-star" />
        )}
      </div>
      <p>
        {totalAverageRating()}% average based on {totalReviews} review(s).
      </p>
      <hr />
      <div className="row align-items-center justify-content-center">
        <div className="col-md-2 side">
          <div>
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
        </div>
        <div className="col-md-9 middle">
          <div className="bar-container">
            <div className="bar-5" style={{ width: `${fivePercentage()}%` }} />
          </div>
        </div>
        <div className="col-md-1 side text-end">
          <div>{fiveStars()}</div>
        </div>
        <div className="col-md-2 side">
          <div>
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star" />
          </div>
        </div>
        <div className="col-md-9 middle">
          <div className="bar-container">
            <div className="bar-4" style={{ width: `${fourPercentage()}%` }} />
          </div>
        </div>
        <div className="col-md-1 side text-end">
          <div>{fourStars()}</div>
        </div>
        <div className="col-md-2 side">
          <div>
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
          </div>
        </div>
        <div className="col-md-9 middle">
          <div className="bar-container">
            <div className="bar-3" style={{ width: `${threePercentage()}%` }} />
          </div>
        </div>
        <div className="col-md-1 side text-end">
          <div>{threeStars()}</div>
        </div>
        <div className="col-md-2 side">
          <div>
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
          </div>
        </div>
        <div className="col-md-9 middle">
          <div className="bar-container">
            <div className="bar-2" style={{ width: `${twoPercentage()}%` }} />
          </div>
        </div>
        <div className="col-md-1 side text-end">
          <div>{twoStars()}</div>
        </div>
        <div className="col-md-2 side">
          <div>
            <i className="bi bi-star-fill" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
            <i className="bi bi-star" />
          </div>
        </div>
        <div className="col-md-9 middle">
          <div className="bar-container">
            <div className="bar-1" style={{ width: `${onePercentage()}%` }} />
          </div>
        </div>
        <div className="col-md-1 side text-end">
          <div>{oneStar()}</div>
        </div>
      </div>
    </div>
  )
}

export default AverageUserRating
