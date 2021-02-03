import React from "react";
import { Button, Table } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";

const UserList = () => {
  const error = "try again";
  const users = [1, 2, 3];
  return (
    <>
      <h1>Users</h1>
      <Loader />
      <Message variant="danger">{error}</Message>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map(() => (
            <tr>
              <td>1</td>
              <td>btm</td>
              <td>
                <a href={`mailto:btm15037@gmail.com`}>btm15037@gmail.com</a>
              </td>
              <td>
                <i className="fas fa-check" style={{ color: "green" }}></i>

                <i className="fas fa-times" style={{ color: "red" }}></i>
              </td>
              <td>
                <Button variant="light" className="btn-sm">
                  <i className="fas fa-edit"></i>
                </Button>

                <Button variant="danger" className="btn-sm">
                  <i className="fas fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserList;
