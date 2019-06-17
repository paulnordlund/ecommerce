import React from "react";
import { Row, Col, Well } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/lib/fa";

export const FeaturedReviews = props => {
  return (
    <div className="featured-reviews-container">
      <Row>
        <Col xs={6} className="featured-reviews-header">
          <span className="featured-review-ranking-md">
            <FaStar className="filled-star-md" />
            <FaStar className="filled-star-md" />
            <FaStar className="filled-star-md" />
            <FaStar className="filled-star-md" />
            <FaStar className="filled-star-md" />
          </span>
          <span className="overall-review-ranking">overall</span>
        </Col>
        <Col xs={6} className="all-reviews">
          <Link to="/reviews" className="all-reviews-link">
            <span className="all-reviews-span">view all 14 reviews</span>
          </Link>
        </Col>
      </Row>

      <Well className="well">
        <Row className="featured-reviews-well-header">
          <Col xs={6} className="featured-postive-review">
            <p className="featured-review-heading">PRO</p>
            <p className="featured-review-category">
              most helpful 4-5 star review
            </p>
          </Col>
          <Col xs={6} className="featured-negative-review">
            <p className="featured-review-heading">CON</p>
            <p className="featured-review-category">
              most helpful 1-2 star review
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="featured-reviews-details">
            <span className="featured-review-ranking-xs">
              <FaStar className="filled-star-xs" />
              <FaStar className="filled-star-xs" />
              <FaStar className="filled-star-xs" />
              <FaStar className="filled-star-xs" />
              <FaStar className="filled-star-xs" />
            </span>
            <h5 className="featured-review-title">Fantastic Blender</h5>
            <p className="featured-review-summary">
              This blender works amazingly, and blends within seconds. The
              single serve cups also work really well for smoothies or protein
              shakes!
            </p>
            <p>
              <span className="featured-review-username">Eric</span>&nbsp;
              <span className="review-date">April 18, 2013</span>
            </p>
          </Col>
          <Col xs={6} className="featured-reviews-details">
            <span className="featured-review-ranking-xs">
              <FaStar className="filled-star-xs" />
              <FaStar className="empty-star-xs" />
              <FaStar className="empty-star-xs" />
              <FaStar className="empty-star-xs" />
              <FaStar className="empty-star-xs" />
            </span>
            <h5 className="featured-review-title">Very unhappy</h5>
            <p className="featured-review-summary">
              Less than 2 months after purchase it completely stopped working.
              First it wouldn't detect the pitcher when trying to blend a
              significant amount, a couple weeks later it wouldn't detect the
              single serve cup.
            </p>
            <p>
              <span className="featured-review-username">New York</span>&nbsp;&nbsp;
              <span className="review-date">March 11, 2013</span>
            </p>
          </Col>
        </Row>
      </Well>
    </div>
  );
};

export default FeaturedReviews;
