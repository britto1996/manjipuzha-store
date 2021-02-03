import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductList = () => {
  const products = [1, 2, 3];
  const error = "try again";
  const errorCreate = "failed to create item";
  const errorDelete = "failed to delete item";
  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3">
            <i className="fas fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>
      <Loader />
      <Message variant="danger">{errorDelete}</Message>
      <Loader />
      <Message variant="danger">{errorCreate}</Message>
      <Loader />
      <Message variant="danger">{error}</Message>
      <>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map(() => (
              <tr>
                <td>1</td>
                <td>macbook</td>
                <td>INR 150,00,00</td>
                <td>Electronics</td>
                <td>Apple</td>
              </tr>
            ))}
            <td>
              <Button variant="light" className="btn-sm">
                <i className="fas fa-edit"></i>
              </Button>
              <Button variant="danger" className="btn-sm">
                <i className="fas fa-trash"></i>
              </Button>
            </td>
          </tbody>
        </Table>
      </>
    </>
  );
};

export default ProductList;
