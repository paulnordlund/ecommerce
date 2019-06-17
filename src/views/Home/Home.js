import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Grid, Row, Col } from "react-bootstrap";
import Carousel from "../../components/Carousel/Carousel";
import FeaturedReviews from "../../components/FeaturedReviews/FeaturedReviews";
import Actions from "../../components/Actions/Actions";
import Highlights from "../../components/Highlights/Highlights";

@inject("store")
@observer
class Home extends Component {
  render() {
    const { store } = this.props;

    return (
      <div className="home">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={6}>
              <Col xs={12}>
                <Carousel title={store.data.title} />
              </Col>
              <Col
                xsHidden
                sm={12}
                md={12}
                lg={12}
                className="desktop-featured-reviews"
              >
                <FeaturedReviews />
              </Col>
            </Col>
            <Col xs={12} sm={6}>
              <Col xs={12}>
                <Actions price={store.data.price} code={store.data.code} />
              </Col>
              <Col xs={12}>
                <Highlights />
              </Col>
              <Col
                xs={12}
                smHidden
                mdHidden
                lgHidden
                className="mobile-featured-reviews"
              >
                <FeaturedReviews />
              </Col>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
