import React from 'react'
import './_slidingPerspective.scss'

const SlidingPerspective = ({ lineOne, lineTwo, lineThree, lineFour }) => {
  return (
    <div className="slidingPerspective py-3 m-auto">
      <div class="perspective-text">
        <div class="perspective-line">
          <p></p>
          <p>{lineOne}</p>
        </div>
        <div class="perspective-line">
          <p>{lineOne}</p>
          <p>{lineTwo}</p>
        </div>
        <div class="perspective-line">
          <p>{lineTwo}</p>
          <p>{lineThree}</p>
        </div>
        <div class="perspective-line">
          <p>{lineThree}</p>
          <p>{lineFour}</p>
        </div>
        <div class="perspective-line">
          <p>{lineFour}</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default SlidingPerspective
