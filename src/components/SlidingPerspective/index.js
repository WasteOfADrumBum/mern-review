import React from 'react'
import './_slidingPerspective.scss'

const SlidingPerspective = ({ lineOne, lineTwo, lineThree, lineFour }) => {
  return (
    <div className="slidingPerspective py-3 m-auto">
      <div className="perspective-text">
        <div className="perspective-line">
          <p></p>
          <p>{lineOne}</p>
        </div>
        <div className="perspective-line">
          <p>{lineOne}</p>
          <p>{lineTwo}</p>
        </div>
        <div className="perspective-line">
          <p>{lineTwo}</p>
          <p>{lineThree}</p>
        </div>
        <div className="perspective-line">
          <p>{lineThree}</p>
          <p>{lineFour}</p>
        </div>
        <div className="perspective-line">
          <p>{lineFour}</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default SlidingPerspective
