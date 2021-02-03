import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = () => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link>
        <Card.Img
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466865542i/18144590._UY2404_SS2404_.jpg"
          variant="top"
        />
      </Link>

      <Card.Body>
        <Link>
          <Card.Title as="div">
            <strong>Alchemist</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value={5} text={`25 reviews`} />
        </Card.Text>

        <Card.Text as="h3">INR 250</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
