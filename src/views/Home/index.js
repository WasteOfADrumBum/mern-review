import React from 'react'
import { Hero, Diagram } from '../../components'
import './_home.scss'

const Home = () => (
  <div className="home">
    <Hero />
    <div className="content">
      {/* User */}
      <div className="userExp mb-3">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-3 align-items-center rounded-3 border shadow">
          <div className="col-lg-12 p-3 p-lg-3 pt-lg-3">
            <h2 className="text-uppercase pb-2 mb-2 border-bottom text-success">
              The User Experieince
            </h2>
            <div className="row">
              <div className="col-md-5">
                <i className="bi bi-person-circle display-1 float-start me-3 text-success" />
                <p>
                  90% of buyers are more likely to convert after reading reviews
                  This statistic alone makes one thing clear: if your business
                  isn’t prioritizing high-quality review generation, you could
                  be losing out on 90 percent of your customers, value-adding
                  relationships, and recurring revenue. Needless to say, product
                  reviews are a big deal. Reading, evaluating, and applying peer
                  insights has become a necessity before purchasing a solution,
                  and online reputation holds more value now than ever before.
                  <a
                    className="ms-2 text-success"
                    href="https://learn.g2.com/impact-of-online-reviews"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <em>Mary Clare Novak</em>
                  </a>
                </p>
                <p>
                  To follow the flow we first start with our user. Our user, for
                  better or worse, is going to leave a review. In this
                  application, we're only grabbing a username instead of
                  someone's actual name. This is primarily to protect your
                  privacy while you're demoing this app. Some applications may
                  ask for your full name or an order number to identify you and
                  reach out if there's a problem. Next, we gather the user's
                  email address. This is so the admin can contact the user if
                  needed, but also can be used to avoid the same person leaving
                  a review multiple times. Lastly, we gather the user's rating
                  and an optional comment for why they left the rating.
                </p>
              </div>
              <div className="col-md-7">
                <Diagram />
              </div>
            </div>

            <hr />
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <a
                role="button"
                className="btn btn-sm text-uppercase btn-outline-success"
                href="./user-dashboard"
                rel="noreferrer"
              >
                User Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Admin */}
      <div className="adminExp mb-3">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-3 align-items-center rounded-3 border shadow">
          <div className="col-lg-12 p-3 p-lg-3 pt-lg-3">
            <h2 className="text-uppercase pb-2 mb-2 border-bottom text-warning">
              The Admin Side of Life
            </h2>
            <div className="row">
              <div className="col-md-8">
                <i className="bi bi-shield-lock display-1 float-start me-3 text-warning" />
                <p>
                  An admin may have to go through millions of reviews, but at
                  the same time, we can't let every review with a comment to the
                  public. Children may be playing a game and look at reviews to
                  find which game they're going to play next. In this
                  application, we'll avoid things like profanity manually. When
                  a rating comes through we'd like to approve the rating itself,
                  but not always the comment. A larger more complex application
                  will use astricts '*' to censor inappropriate words or have
                  the backend filter the comments automatically. This usually
                  sends an email or message back to them letting them know why
                  the comment wasn't posted and giving them a chance to review
                  or edit it. In this application, we can choose to approve the
                  whole review or just the rating and clear out the comment
                  itself.
                </p>

                <p>
                  As an additional feature to make it easier for the admin an
                  automatic approval is issued if there is only a rating with no
                  comment. We always want the rating to be genuine even if the
                  comment can't be publicly posted. Lastly, I've added a remove
                  button, now typically you'd never want to remove a rating.
                  This is usually reserved for a corrupt submission to the
                  database or if you were paying attention to something other
                  than the pandemic in 2021 you may have seen Google delete
                  100,000 negative reviews to try to salvage the Robinhood App's
                  one-star rating during the GameStop tock diabolical.
                  <a
                    className="ms-2 text-warning"
                    href="https://www.theverge.com/2021/1/28/22255245/google-deleting-bad-robinhood-reviews-play-store"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <em>Jay Peters</em>
                  </a>
                </p>
              </div>
              <div className="col-md-4 d-flex align-items-center justify-content-center">
                <img
                  src="./assets/images/robinhoodapp.webp"
                  alt="robin_hood"
                  className="img-fluid px-5 py-2"
                />
              </div>
            </div>
            <hr />
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <a
                role="button"
                className="btn btn-sm text-uppercase btn-outline-warning"
                href="./admin-dashboard"
                rel="noreferrer"
              >
                Admin Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Reviews */}
      <div className="publicReviews mb-3">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-3 align-items-center rounded-3 border shadow">
          <div className="col-lg-12 p-3 p-lg-3 pt-lg-3">
            <h2 className="text-uppercase pb-2 mb-2 border-bottom text-danger">
              Application Reviews
            </h2>
            <div className="row">
              <div className="col-md-4">
                <i className="bi bi-list-stars display-1 float-start me-3 text-danger" />
                <h5>You’re Under Review</h5>{' '}
                <p>
                  The way you market your brand is important, but having people
                  talk about you is a great way to enhance your message. By
                  encouraging positive conversations about your brand, you can
                  quickly and clearly improve your marketing efforts.
                  <a
                    className="text-danger ms-2"
                    href="https://mention.com/en/blog/online-reviews/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <em>Smith Willas</em>
                  </a>
                </p>
              </div>
              <div className="col-md-8 p-4">
                <h5 className="text-uppercase border-bottom pb-2 mb-2 text-danger">
                  7 Reasons Online Reviews are Essential for Your Brand
                </h5>
                <ol>
                  <li>
                    <p>
                      <b className="text-uppercase">
                        Social Proof Drives Purchases
                      </b>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b className="text-uppercase">
                        They Make You More Visible
                      </b>
                      <br />
                      <i>
                        Being a successful brand also means you’re a visible
                        one.
                      </i>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b className="text-uppercase">
                        They Make You Look Trustworthy
                      </b>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b className="text-uppercase">
                        They Expand the Conversation About You
                      </b>
                      <br />
                      <i>
                        Encouraging consumers to review your company is an easy
                        way to expand your brand’s reach.
                      </i>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b className="text-uppercase">
                        They Are Increasingly Essential to Decision Making
                      </b>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b className="text-uppercase">
                        They Have a Clear Impact on Sales
                      </b>
                      <br />
                      <i>Reviews do empirically lead to increased revenue.</i>
                    </p>
                  </li>
                  <li>
                    <p>
                      <b className="text-uppercase">
                        They Give You An Open Line to Consumers
                      </b>
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            {/* Stats */}
            <h3 className="text-uppercase pb-2 mb-2 border-bottom text-danger">
              Let's see the numbers
            </h3>
            <div className="row">
              <div className="col-md-4 my-2">
                <div className="stats danger">
                  <h4>92%</h4> of B2B buyers are more likely to purchase after
                  reading a trusted review.{' '}
                  <p>
                    <em>
                      Source:{' '}
                      <a
                        className="text-danger"
                        href="https://learn.g2.com/hubfs/Sell%20Microsite%20Files/The%20Impact%20of%20Reviews%20on%20B2B%20-%20Report.pdf"
                        rel="noreferrer"
                        target="_blank"
                      >
                        G2 and Heinz Marketing
                      </a>
                    </em>
                  </p>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="stats danger">
                  <h4>82%</h4> of buyers find review sites valuable in their
                  search.
                  <p>
                    <a
                      className="text-danger"
                      href="https://learn.g2.com/importance-of-saas-review-websites"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <em>Learn more</em>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="stats danger">
                  <h4>67%</h4> of B2B buyers prefer to see a mix of positive and
                  negative reviews before making a purchase.
                  <p>
                    <a
                      className="text-danger"
                      href="https://learn.g2.com/g2-negative-reviews"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <em>Learn more</em>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="stats danger">
                  <h4>61%</h4> of people who end up making a purchase like to
                  read anywhere between 11-50 reviews.
                  <p>
                    <a
                      className="text-danger"
                      href="https://learn.g2.com/importance-of-review-quantity"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <em>Learn more</em>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div className="stats danger">
                  <h4>31%</h4> more money is spent by customers when your
                  business has positive reviews.
                  <p>
                    <em>Source:</em>&nbsp;
                    <a
                      className="text-danger"
                      href="https://broadly.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <em>Broadly</em>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <a
                role="button"
                className="btn btn-sm text-uppercase btn-outline-danger"
                href="./public-reviews"
                rel="noreferrer"
              >
                Public Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
