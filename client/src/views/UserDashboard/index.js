import React from 'react'
import { CreateReviewForm, RetroTextEffect } from '../../components'

const UserDashboard = () => (
  <div className="user dashboard">
    <RetroTextEffect hdr="user" subHdr="dashboard" />
    <CreateReviewForm />
  </div>
)

export default UserDashboard
