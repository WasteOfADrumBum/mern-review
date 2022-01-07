import React from 'react'
import './_diagram.scss'

const Diagram = () => {
  return (
    <div className="diagram">
      <div className="row">
        <div className="col-md-6 p-4">
          <h3 className="text-uppercase border-bottom pb-2 mb-2 text-success">
            UX
          </h3>
          <h6 className="text-uppercase">
            human-first approach to product design
          </h6>
          <ul>
            <li>
              <b className="text-uppercase">application:</b>
              <p>Physical and digital products</p>
            </li>
            <li>
              <b className="text-uppercase">focus:</b>
              <p>The full experience from a user's first contact to the last</p>
            </li>
            <li>
              <b className="text-uppercase">creates:</b>
              <p>
                Structural design solutions for pain points that users encounter
                anaywhere along their journey with the product
              </p>
            </li>
            <li>
              <b className="text-uppercase">results in:</b>
              <p>Products that delight users with their effectivness</p>
            </li>
          </ul>
        </div>
        <div className="col-md-6 p-4">
          <h3 className="text-uppercase border-bottom pb-2 mb-2 text-success">
            UI
          </h3>
          <h6 className="text-uppercase">
            human-first approach to designing the aethetic experience of a
            product
          </h6>
          <ul>
            <li>
              <b className="text-uppercase">application:</b>
              <p>Digital prducts only</p>
            </li>
            <li>
              <b className="text-uppercase">focus:</b>
              <p>
                Visual touchpoints that allow users to interact with a product
              </p>
            </li>
            <li>
              <b className="text-uppercase">creates:</b>
              <p>
                compinations of typography, color palettes, buttons, animations,
                and imagery
              </p>
            </li>
            <li>
              <b className="text-uppercase">results in:</b>
              <p>Products that delight users aesthetically</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Diagram
