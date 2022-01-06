import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AverageUserRating, CommentList } from '../../components'
import { readReviews } from '../../actions'

const PublicReviews = ({
  readReviews,
  reviews: { reviews, loading: reviews_loading },
}) => {
  const [filteredData, setFilteredData] = useState([])

  /* Load all entries */
  useEffect(() => {
    /* Load all reviews */
    readReviews()
  }, [readReviews])

  useEffect(() => {
    /* Filter unapproved reviews */
    let data = reviews.filter((review) => review.approved === true)
    setFilteredData(data)
  }, [reviews_loading, reviews])

  return (
    <div className="publicReviews">
      {reviews_loading ? (
        <>
          <AverageUserRating data={filteredData} />
          <CommentList data={filteredData} />
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
})(PublicReviews)
