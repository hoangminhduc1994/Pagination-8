import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const ProductItem = ({ product }) => {
  return (
    <Col md={3} className="mb-4">
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.content}</Card.Text>
          <Button variant="primary">Price: {product.price} VND</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductItem;
