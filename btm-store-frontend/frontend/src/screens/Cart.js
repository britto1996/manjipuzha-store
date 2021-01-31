import React from "react";
import {
  Col,
  Form,
  Image,
  ListGroup,
  Row,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <Row>
        <Col md={8}>
          <strong>
            Your cart is empty <Link to="/">Go back</Link>
          </strong>
          <ListGroup varient="flush">
            <Row>
              <Col md={2}>
                <Image
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466865542i/18144590._UY2404_SS2404_.jpg"
                  alt="prod-image"
                  fluid
                  rounded
                />
              </Col>
              <Col md={3}>
                <Link to="/">Alchemist</Link>
              </Col>
              <Col md={2}>INR 250</Col>
              <Col md={2}>
                <Form.Control as="select" value="2"></Form.Control>
              </Col>
              <Col md={2}>
                <Button type="button" varient="light">
                  {" "}
                  <i className="fas fa-trash"></i>
                </Button>
              </Col>
              <Col md={4}>
                <Card>
                  <ListGroup varient="flush">
                    <ListGroup.Item>
                      <h2>Subtotal</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button type="button" className="btn-block">
                        proceed to checkout{" "}
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
