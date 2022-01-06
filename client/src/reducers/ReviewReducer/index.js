import {
  GET_REVIEWS,
  GET_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  RESET_REVIEW,
  REVIEW_LOADING,
  REVIEW_FAIL,
  REVIEW_SUCCESS,
} from '../../actions'

const ReviewReducer = (
  state = {
    reviews: [], // Pulls in all Reviews
    reviewOne: null, // Pulls in Specific Review
    loading: false, // Has everything needed been loaded
    success: {},
    error: {},
  },
  action,
) => {
  const { type, payload } = action
  switch (type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: payload,
        loading: true,
      }
    case GET_REVIEW:
      return {
        ...state,
        reviewOne: payload,
        loading: true,
      }
    case UPDATE_REVIEW:
      return {
        ...state,
        reviewOne: payload,
        loading: true,
      }
    case DELETE_REVIEW:
      return {
        ...state,
        reviews: payload,
        loading: true,
      }
    case RESET_REVIEW:
      return {
        ...state,
        reviewOne: null,
        loading: false,
      }
    case REVIEW_LOADING:
      return {
        ...state,
        loading: true,
        reviewOne: null,
        error: {},
      }
    case REVIEW_FAIL:
      return {
        ...state,
        error: payload,
        reviews: [],
        reviewOne: null,
        loading: false,
      }
    case REVIEW_SUCCESS:
      return {
        ...state,
        success: payload,
        reviews: [payload, ...state.reviews],
        loading: false,
      }
    default:
      return state
  }
}

export default ReviewReducer
