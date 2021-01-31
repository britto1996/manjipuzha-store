import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = () => {
  return (
    <Card>
      <Link>
        <Card.Img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466865542i/18144590._UY2404_SS2404_.jpg" />
      </Link>

      <Card.Body>
        <Link>
          <Card.Title as="div">
            <strong>Alchemist</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h3">INR 250</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
