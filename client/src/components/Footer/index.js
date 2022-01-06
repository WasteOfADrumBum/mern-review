import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with me on social networks:</span>
        </div>
        <div>
          <a
            href="https://www.facebook.com/WasteOfADrumBum"
            className="me-4 text-reset"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/one_small_family/"
            className="me-4 text-reset"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/joshuamsmall/"
            className="me-4 text-reset"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/WasteOfADrumBum"
            className="me-4 text-reset"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </section>

      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="bi bi-gem me-3" />
                Joshua M. Small
                <div>Full Stack Developer</div>
              </h6>
              <p>
                You can check out my MERN Stack Crud Application{' '}
                <a
                  href="https://jms-r0b.herokuapp.com/"
                  alt="R0B"
                  className="fontConsolas text-info"
                >
                  ⇜R⥽0⥼B⇝
                </a>{' '}
                where I'm hosting an assortment of animations.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="https://reactjs.org/" className="text-reset">
                  React v17
                </a>
              </p>
              <p>
                <a
                  href="https://reactrouter.com/docs/en/v6/getting-started/overview"
                  className="text-reset"
                >
                  React-Router-Dom v6
                </a>
              </p>
              <p>
                <a href="https://getbootstrap.com/" className="text-reset">
                  Bootstrap v5
                </a>
              </p>
              <p>
                <a
                  href="https://www.npmjs.com/package/node-sass"
                  className="text-reset"
                >
                  Node-Sass v7
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="./user-dashboard" className="text-reset">
                  User Dashboard
                </a>
              </p>
              <p>
                <a href="./admin-dashboard" className="text-reset">
                  Admin Dashboard
                </a>
              </p>
              <p>
                <a href="./public-reviews" className="text-reset">
                  Public Reviews
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="bi bi-house me-3"></i> Trinity NC USA
              </p>
              <p>
                <i className="bi bi-envelope me-3"></i>
                jmsmall89@gmail.com
              </p>
              <p>
                <i className="bi bi-phone me-3"></i> 828.333.8983
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Copyright */}
      <div className="text-center p-4">
        © 2022 Copyright:{' '}
        <a
          className="text-reset fw-bold"
          href="https://github.com/WasteOfADrumBum"
        >
          Joshua M. Small
        </a>
      </div>
    </footer>
  )
}

export default Footer
