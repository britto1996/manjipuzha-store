import React from "react";
import { Button, Table } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";

const OrderList = () => {
  const orders = [1, 2];
  const error = "can't refresh orders list";
  return (
    <>
      <h1>Orders</h1>
      <Loader />
      <Message variant="danger">{error}</Message>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>USER</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map(() => (
            <tr>
              <td>1</td>
              <td>apple watch</td>
              <td>2/1/2021</td>
              <td>INR 60,000</td>
              <td>
                <i className="fas fa-times" style={{ color: "red" }}></i>
              </td>
              <td>
                <Button variant="light" className="btn-sm">
                  Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default OrderList;
