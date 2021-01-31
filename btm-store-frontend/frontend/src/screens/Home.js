import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

const Home = () => {
  return (
    <Row>
      <Col sm={12} md={6} lg={4} xl={3}>
        <Product />
      </Col>
    </Row>
  );
};

export default Home;
