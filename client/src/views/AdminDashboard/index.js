import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import {
  readReviews,
  deleteReview,
  updateReviewStatus,
  updateReviewComment,
  resetReview,
} from '../../actions'
import { RetroTextEffect } from '../../components'
import './_adminDashboard.scss'

const AdminDashboard = ({
  readReviews,
  deleteReview,
  updateReviewStatus,
  updateReviewComment,
  resetReview,
  reviews: { reviews, loading: reviews_loading },
}) => {
  const [filteredData, setFilteredData] = useState([])
  const navigate = useNavigate()

  /* Load all entries */
  useEffect(() => {
    /* Load all reviews */
    readReviews()
  }, [readReviews])

  useEffect(() => {
    /* Filter unapproved reviews */
    let data = reviews.filter((review) => review.approved === false)
    setFilteredData(data)
  }, [reviews_loading, reviews])

  /* Update [Approved: True] */
  const onClickUpdateStatusOnly = (id) => {
    const formData = {
      approved: true,
    }
    updateReviewStatus(id, formData)
    //reset redux state
    resetReview()
    // navigate to public reviews page
    navigate('../public-reviews')
  }

  /* Update [Approved: True] & [Comment: ''] */
  const onClickUpdateStatusComment = (id) => {
    const formData = {
      approved: true,
      comment: '',
    }
    updateReviewComment(id, formData)
    // navigate to public reviews page
    navigate('../public-reviews')
  }

  const onDelete = (id) => {
    // Remove entry by ID
    deleteReview(id)
  }

  return (
    <div className="admin dashboard">
      <RetroTextEffect hdr="admin" subHdr="dashboard" />
      <div className="alert alert-info" role="alert">
        <h4 className="alert-heading text-info">
          <i className="bi bi-info-circle-fill me-2" />
          <b>Unapproved Reviews:</b> Please Read!
        </h4>
        <hr />
        <p className="text-success">
          <i className="bi bi-check2-square  me-2" /> Approve entire review.
        </p>
        <p className="text-warning">
          <i className="bi bi-exclamation-triangle-fill me-2" /> Approve only
          the rating becuase the comment is inappropriate.
        </p>
        <p className="text-danger ">
          <i className="bi bi-trash me-2" /> This review is currupted remove to
          avoid database errors.
        </p>
        <hr />
        <i className="mb-0">
          Reviews that <b>only have a rating</b> are automatically approved.
        </i>
      </div>
      {reviews_loading ? (
        <>
          {' '}
          {filteredData.length > 0 ? (
            <>
              {filteredData.map((review, i) => (
                <div className="card my-3" key={i}>
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-6 test-start ">
                        <h6 className="userName text-uppercase mb-0">
                          {review.user.userName}
                        </h6>
                        <i>{review.user.email}</i>
                      </div>
                      <div className="col-md-6 text-end text-warning">
                        {review.review.rating >= 0 ? (
                          <i className="bi bi-star-fill" />
                        ) : (
                          <i className="bi bi-star" />
                        )}
                        {review.review.rating >= 21 ? (
                          <i className="bi bi-star-fill" />
                        ) : (
                          <i className="bi bi-star" />
                        )}
                        {review.review.rating >= 41 ? (
                          <i className="bi bi-star-fill" />
                        ) : (
                          <i className="bi bi-star" />
                        )}
                        {review.review.rating >= 61 ? (
                          <i className="bi bi-star-fill" />
                        ) : (
                          <i className="bi bi-star" />
                        )}
                        {review.review.rating >= 81 ? (
                          <i className="bi bi-star-fill" />
                        ) : (
                          <i className="bi bi-star" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-break">{review.review.comment}</p>
                  </div>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-md-6 test-start ">
                        {/* Approve All */}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-success text-uppercase mx-1"
                          onClick={() => onClickUpdateStatusOnly(review._id)}
                        >
                          <i className="bi bi-check2-square" />
                        </button>
                        {/* Approve Rating Only */}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-warning text-uppercase mx-1"
                          onClick={() => onClickUpdateStatusComment(review._id)}
                        >
                          <i className="bi bi-exclamation-triangle-fill" />
                        </button>
                        {/* Remove All */}
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger text-uppercase mx-1"
                          onClick={() => onDelete(review._id)}
                        >
                          <i className="bi bi-trash" />
                        </button>
                      </div>
                      <div className="col-md-6  text-muted text-end">
                        {moment(review.createdAt).format('MMMM DD YYYY')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="alert alert-success text-sucess " role="alert">
              <i className="bi bi-check2-circle me-2" />
              No more reviews need to be approved
            </div>
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  reviewReducer: state.reviewReducer,
  reviews: state.reviews,
})

export default connect(mapStateToProps, {
  readReviews,
  deleteReview,
  updateReviewStatus,
  updateReviewComment,
  resetReview,
})(AdminDashboard)
