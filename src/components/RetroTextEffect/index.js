import React from 'react'
import './_retroTextEffect.scss'

const RetroTextEffect = ({ hdr, subHdr }) => {
  return (
    <div className="retroTextEffect py-3 mb-1">
      <h1>
        <span>{hdr}</span>
        <span>{hdr}</span>
      </h1>
      <h2>{subHdr}</h2>
    </div>
  )
}

export default RetroTextEffect
