import React from 'react'

const Hero = () => {
  return (
    <div className="hero my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1">
            This project demos the lifecycle of reviews on apps and the web.
          </h1>
          <p className="lead">
            Ever wonder how the AppStore or websites lke Google and Yelp! get it
            done?
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;In 2020, an astounding 97% of customers
            reported reading online reviews before making a purchase. Customers
            read an average of seven reviews before trusting a company. Nearly
            half of those will only choose to use a business or product that has
            a rating 4-stars or higher. As if those numbers aren’t enough, a
            shocking 88% of consumers trust online reviews as much as personal
            recommendations. No need to ask around your social network when
            there are plenty of credible reviews to scour over online.
          </p>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="rounded-lg-3"
            src="./assets/images/sample-hero.png"
            alt=""
            width="720"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
