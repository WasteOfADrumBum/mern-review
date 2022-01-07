import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './_commentList.scss'

const CommentList = ({ data }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    let commentData = data.filter((comments) => comments.review.comment !== '')
    setComments(commentData)
  }, [data])

  return (
    <div className="commentList">
      {comments && comments.length > 0 ? (
        <>
          <div className="totalCount">
            <p>Total Comments: {comments.length}</p>
          </div>
          {comments.map((comment, i) => (
            <div className="card my-3" key={i}>
              <div className="card-header">
                <h6 className="userName text-uppercase">
                  <b>{comment.user.userName}</b>
                </h6>
              </div>
              <div className="card-body">
                <p className="text-break">{comment.review.comment}</p>
              </div>
              <div className="card-footer text-muted text-end">
                {moment(comment.createdAt).format('MMMM DD YYYY')}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div
          className="alert alert-warning d-flex align-items-center"
          role="alert"
        >
          <div>No Comments</div>
        </div>
      )}
    </div>
  )
}

export default CommentList
