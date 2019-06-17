import React, { Component } from "react";
import { observer } from "mobx-react";
import Slider from "react-slick";
import { Row, Col } from "react-bootstrap";

@observer
export class Carousel extends Component {
  render() {
    const { title } = this.props;

    const settings = {
      // customPaging: function(i) {
      //   return (
      //     <a>
      //       <img
      //         className="carousel-thumbs"
      //         src={`http://target.scene7.com/is/image/Target/14263758_Alt0${i +
      //           1}`}
      //         alt=""
      //       />
      //     </a>
      //   );
      // },
      accessibility: true,
      arrows: false,
      className: "carousel-component",
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      fade: true,
      infinite: true,
      lazyLoad: "ondemand",
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true
    };

    const createMarkup = value => {
      return {
        __html: value
      };
    };

    return (
      <div className="carousel-container">
        <Row>
          <Col xs={12} className="title-section">
            <h2
              className="main-item-detail-header"
              dangerouslySetInnerHTML={createMarkup(title)}
            />
          </Col>
          <Col xs={12} className="carousel-section">
            <Slider {...settings}>
              <div><img className="carousel-image" src='//target.scene7.com/is/image/Target/GUEST_55b87cbe-a889-476b-b45d-e93abd41db53?wid=488&amp;hei=488&amp;fmt=webp' /></div>
              <div><img className="carousel-image" src='//target.scene7.com/is/image/Target/GUEST_9590cb47-0331-4736-9612-75f35968298f?wid=488&amp;hei=488&amp;fmt=webp' /></div>
              <div><img className="carousel-image" src='//target.scene7.com/is/image/Target/GUEST_98074548-376a-479a-85c7-748e53868981?wid=488&hei=488&fmt=webp' /></div>
              <div><img className="carousel-image" src='//target.scene7.com/is/image/Target/GUEST_5ddbeba3-3b3d-4675-b5fc-8e8337dc0e7a?fmt=webp&qlt=80&wid=1400' /></div>
            </Slider>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Carousel;
