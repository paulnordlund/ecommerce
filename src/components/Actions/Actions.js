import React, { Component } from "react";
import { observer } from "mobx-react";
import { Row, Col, Button } from "react-bootstrap";
import { IoIosPricetag } from "react-icons/lib/io";
import NumericInput from "react-numeric-input";

@observer
class Actions extends Component {
  render() {
    const { price, code } = this.props;

    return (
      <div className="actions-container">
        <Row>
          <Col xs={12} className="price-section">
            <p className="item-price">
              {price}
              <span className="item-price-description">&nbsp;online price</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="promotions-section">
            <p className="promotion-01">
              <IoIosPricetag className="pricetag" />
              &nbsp;&nbsp;spend $50, ship free
            </p>
            <p className="promotion-02">
              <IoIosPricetag className="pricetag" />
              &nbsp;&nbsp;$25 gift card with purchase of a select Ninja Blender
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="quantity-section">
            <Col xs={3} className="quantity-label">
              <span>quantity:</span>
            </Col>
            <Col xs={3} className="quantity-input-container">
              <NumericInput
                min={0}
                precision={0}
                value={1}
                mobile
                className="quantity-input"
              />
            </Col>
          </Col>
        </Row>
        <Row>
          {(code === "0" || code === "2") && (
            <Col xs={6} className="action-buttons">
              <Button className="action-button-pick-up-in-store" block>
                <span className="action-button-text">PICK UP IN STORE</span>
              </Button>
              <p className="in-store-description">find in a store</p>
            </Col>
          )}
          {(code === "0" || code === "1") && (
            <Col xs={6} className="action-buttons">
              <Button className="action-button-add-to-cart" block>
                <span className="action-button-text">ADD TO CART</span>
              </Button>
            </Col>
          )}
        </Row>
        <Row className="returns-section">
          <Col xs={3} md={2} className="border-right">
            <p className="returns-title">returns</p>
          </Col>
          <Col xs={9} md={10}>
            <p className="returns-description">
              This item must be returned within 30 days of the ship date. See
              return policy for details. Prices, promotions, styles and
              availability may vary by store and online.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={4} className="alt-action-buttons">
            <Button className="alt-action-button" bsSize="small" block>
              <span className="alt-action-button-text">ADD TO REGISTRY</span>
            </Button>
          </Col>
          <Col xs={4} className="alt-action-buttons">
            <Button className="alt-action-button" bsSize="small" block>
              <span className="alt-action-button-text">ADD TO LIST</span>
            </Button>
          </Col>
          <Col xs={4} className="alt-action-buttons">
            <Button className="alt-action-button" bsSize="small" block>
              <span className="alt-action-button-text">SHARE</span>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Actions;
