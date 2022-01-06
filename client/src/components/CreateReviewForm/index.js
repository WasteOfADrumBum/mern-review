import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { createReview } from '../../actions'
import { Rating } from 'react-simple-star-rating'
import './_createReviewForm.scss'

const CreateReviewForm = ({ createReview }) => {
  const [rating, setRating] = useState(0) // initial rating value
  const [alertNotification, setAlertNotification] = useState(false)
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    comment: '',
    review: 0,
    approved: false,
  })

  const { userName, email, comment } = formData
  const navigate = useNavigate()

  // Captures changes made to the form data
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // reset alert
    setAlertNotification(false)
  }

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // reset alert
    setAlertNotification(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // reset alert
    setAlertNotification(false)

    if (userName === '' || email === '' || rating === 0) {
      setAlertNotification(true)
    } else {
      // Trim white space off input's
      let trimFormData = {
        ...formData,
        userName: userName.trim(),
        email: email.trim(),
        comment: comment.trim(),
        review: rating,
        // Always False if there's a comment
        approved:
          comment === '' || comment === null || comment === undefined
            ? true
            : false,
      }

      // send trimmed formData to the API
      createReview(trimFormData)

      // clear formData
      setFormData({
        userName: '',
        email: '',
        comment: '',
        review: 0,
        approved: false,
      })

      // clear rating
      setRating(0)

      // reset alert
      setAlertNotification(false)

      // navigate to admin page
      navigate('../admin-dashboard')
    }
  }

  return (
    <div className="row p-lg-3 mt-2 mb-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-12 p-lg-3">
        <div
          className={
            'alert alert-danger d-flex flex-column ' +
            (alertNotification ? 'd-block' : 'd-none')
          }
          role="alert"
        >
          <div className={userName !== '' ? 'd-none' : 'd-block'}>
            <i className="bi bi-exclamation-diamond-fill me-2" />
            User Name is a required field.
          </div>
          <div className={email !== '' ? 'd-none' : 'd-block'}>
            <i className="bi bi-exclamation-diamond-fill me-2" />
            Email is a required field.
          </div>
          <div className={rating !== 0 ? 'd-none' : 'd-block'}>
            <i className="bi bi-exclamation-diamond-fill me-2" />
            Rating is a required field.
          </div>
        </div>
        <div className="card-body stars">
          <h2 className="text-uppercase mb-3">User Review</h2>
          <form noValidate onSubmit={(e) => onSubmit(e)}>
            <div className="input-group mb-3">
              <label htmlFor="inputUserName" className="input-group-text">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                aria-label="username"
                id="inputUserName"
                name="userName"
                value={userName}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="input-group mb-3">
              <label htmlFor="inputEmail" className="input-group-text">
                Email
              </label>
              <input
                type="email"
                placeholder="email@gmail.com"
                className="form-control"
                id="inputEmail"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="input-group mb-3">
              <label htmlFor="inputRating" className="input-group-text">
                Rating
              </label>
              <div className="form-control" id="inputRating">
                <div className="starRating">
                  <Rating
                    onClick={handleRating}
                    ratingValue={rating}
                    size={20}
                    label
                    transition
                    fillColor="gold"
                    emptyColor="gray"
                  />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <label htmlFor="textareaComment" className="input-group-text">
                Comment
              </label>
              <textarea
                className="form-control"
                id="textareaComment"
                rows="5"
                name="comment"
                value={comment}
                onChange={(e) => onChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({ ReviewReducer: state.ReviewReducer })

export default connect(mapStateToProps, { createReview })(CreateReviewForm)
