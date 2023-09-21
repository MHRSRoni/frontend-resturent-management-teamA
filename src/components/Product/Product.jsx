
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = ({ food }) => {
  console.log(food);
  const { title, index, picture, name, price, calories } = food;
  return (
    <Card className="mt-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6>Price {price}</h6>
          <h6>Calories: {calories} </h6>
        </div>
        <div>
          <Button variant="outline-warning text-dark">+ Add to Cart</Button>
          <Button variant="outline-warning text-dark ms-5">Details </Button>
        </div>
      </Card.Body>
    </Card>
  );

import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Product = ({ food }) => {
    // console.log(food);
    const { _id, title, index, picture, name, price, calaory } = food;


    return (


        <Card className='mt-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h6>Price {price}</h6>
                    <h6>Calories: {calaory} </h6>
                </div>
                <div>


                    <Button variant="outline-warning text-dark">+ Add to Cart</Button>

                    <Link to={`/details/${_id}`}>
                        <Button variant="outline-warning text-dark ms-5">Details </Button>
                    </Link>

                </div>
            </Card.Body>
        </Card>

    );
};

export default Product;
