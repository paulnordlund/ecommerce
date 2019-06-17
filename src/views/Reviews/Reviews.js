import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

class Reviews extends Component {
  render() {
    return (
      <div className="reviews">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={6}>
              <Col xs={12}>
                <Link to="/">Back To Item</Link>
                <h2>All Full Reviews Section Goes Here</h2>
              </Col>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Reviews;
