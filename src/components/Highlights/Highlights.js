import React from "react";
import { Row, Col } from "react-bootstrap";

export const Highlights = props => {
  return (
    <div className="highlights-container">
      <Row>
        <Col xs={12}>
          <p className="highlights-heading">product highlights</p>
          <ul className="highlights-list">
            <li className="highlights-list-item">Wattage Output: 1100 Watts</li>
            <li className="highlights-list-item">Number of Speeds: 3</li>
            <li className="highlights-list-item">
              Capacity (volume): 72.0 Oz.
            </li>
            <li className="highlights-list-item">
              Appliance Capabilities: Blends
            </li>
            <li className="highlights-list-item">Includes: Travel Lid</li>
            <li className="highlights-list-item">Material: Plastic</li>
            <li className="highlights-list-item">Finish: Painted</li>
            <li className="highlights-list-item">Metal Finish: Chrome</li>
            <li className="highlights-list-item">
              Safety and Security Features: Non-Slip Base
            </li>
            <li className="highlights-list-item">
              Care and Cleaning: Easy-To-Clean, Dishwasher Safe Parts
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Highlights;
