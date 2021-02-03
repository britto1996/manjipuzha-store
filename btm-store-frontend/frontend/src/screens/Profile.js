import React from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";

const Profile = () => {
  const message = "profile failed to update";
  const error = "try again";
  const errorOrders = "error in ordering product";
  return (
    <Row>
      <Col md={3}>
        <h2>User profile</h2>
        <Message variant="danger">{message}</Message>
        <Message variant="success">Profile Updated</Message>
        <Loader />
        <Message variant="danger">{error}</Message>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name"></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
        <Loader />
        <Message variant="danger">{errorOrders}</Message>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              {" "}
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <td>5</td>
            <td>created at 1/31/2021</td>
            <td>INR 250000</td>
            <td>
              {" "}
              <i className="fas fa-times" style={{ color: "red" }}></i>
            </td>
            <td>
              <i className="fas fa-times" style={{ color: "red" }}></i>
            </td>
            <td>
              <Button className="btn-sm" variant="light">
                Details
              </Button>
            </td>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default Profile;
