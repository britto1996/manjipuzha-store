import React from "react";
import { Col, Row } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";
import Product from "../components/Product";
import Productcarousal from "../components/Productcarousal";

const Home = () => {
  const products = [1, 2, 3, 4];
  return (
    <>
      <Meta />
      <>
        <Productcarousal />
        <h1>Latest products</h1>
        <Loader />
        <Message variant="danger">try again</Message>
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </>
    </>
  );
};

export default Home;
