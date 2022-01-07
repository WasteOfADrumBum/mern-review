import axios from 'axios'

export const GET_REVIEWS = 'GET_REVIEWS'
export const GET_REVIEW = 'GET_REVIEW'
export const UPDATE_REVIEW = 'UPDATE_REVIEW'
export const DELETE_REVIEW = 'DELETE_REVIEW'
export const RESET_REVIEW = 'RESET_REVIEW'
export const REVIEW_LOADING = 'REVIEW_LOADING '
export const REVIEW_FAIL = 'REVIEW_FAIL'
export const REVIEW_SUCCESS = 'REVIEW_SUCCESS'

// @Route   GET api/review
// @Desc    Read All Review
// @Action  readReviews()
// @Access  Private
export const readReviews = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/review')
    dispatch({
      type: GET_REVIEWS,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: REVIEW_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   GET api/review/:id
// @Desc    Read Review by ID
// @Action  readReview()
// @Access  Private
export const readReview = (id) => async (dispatch) => {
  dispatch({ type: RESET_REVIEW })
  try {
    const res = await axios.get(`/api/review/${id}`)
    dispatch({
      type: GET_REVIEW,
      payload: res.data,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: REVIEW_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   POST api/review/create-review
// @Desc    Create Review
// @Action  createReview()
// @Access  Private
export const createReview = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    await axios
      .post('/api/review/create-review', formData, config)
      .then((res) => console.log(res.data))
    dispatch({
      type: REVIEW_SUCCESS,
      payload: { msg: formData, status: 'success' },
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }

    dispatch({
      type: REVIEW_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   PUT api/review/update-review/:id
// @Desc    Update Review
// @Action  updateReview()
// @Access  Private
export const updateReview = (id, formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(
      `/api/review/update-review/${id}`,
      formData,
      config,
    )
    dispatch({
      type: UPDATE_REVIEW,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: REVIEW_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   PUT api/review/update-review-status/:id
// @Desc    Update Review Status Only
// @Action  updateReviewStatus()
// @Access  Private
export const updateReviewStatus = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(
      `/api/review/update-review-status/${id}`,
      config,
    )
    dispatch({
      type: UPDATE_REVIEW,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: REVIEW_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   PUT api/review/update-review-comment/:id
// @Desc    Update Review Status and Comment
// @Action  updateReviewComment()
// @Access  Private
export const updateReviewComment = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.post(
      `/api/review/update-review-comment/${id}`,
      config,
    )
    dispatch({
      type: UPDATE_REVIEW,
      payload: res.data,
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type: REVIEW_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}

// @Route   DELTE api/review/delete-review/:id
// @Desc    Delete Review
// @Action  deleteReview()
// @Access  Private
export const deleteReview = (id) => async (dispatch) => {
  if (
    window.confirm(
      'Are you sure you want to delete this review? This cannot be undone.',
    )
  ) {
    try {
      const res = await axios.delete(`/api/review/delete-review/${id}`)
      dispatch({
        type: DELETE_REVIEW,
        payload: res.data,
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: REVIEW_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status },
      })
    }
  }
}

// @Desc    reset Review
// @Action  resetReview()
// @Access  Private
export const resetReview = () => async (dispatch) => {
  dispatch({ type: REVIEW_LOADING })

  try {
    dispatch({
      type: RESET_REVIEW,
    })
  } catch (err) {
    if (err.response.data.errors) {
      dispatch({
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      })
    }

    dispatch({
      type: REVIEW_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    })
  }
}
