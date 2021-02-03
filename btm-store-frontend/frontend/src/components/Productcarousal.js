import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Productcarousal = () => {
  return (
    <Carousel pause="hover" className="bg-dark">
      <Carousel.Item>
        <Link>
          <Image
            src="https://stylesatlife.com/wp-content/uploads/2019/05/Rakul-Preet-Singh-in-a-Kanchipuram-Saree.jpg"
            alt="slideshow"
            fluid
          />
          <Carousel.Caption className="carousel-caption">
            <h2>Kanchipuram saree</h2>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link>
          <Image
            src="https://stylesatlife.com/wp-content/uploads/2019/05/Rakul-Preet-Singh-in-a-Kanchipuram-Saree.jpg"
            alt="slideshow"
            fluid
          />
          <Carousel.Caption className="carousel-caption">
            <h2>Kanchipuram saree</h2>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default Productcarousal;
