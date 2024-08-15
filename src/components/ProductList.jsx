import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import PaginationComponent from './Pagination';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Số sản phẩm trên mỗi trang
  const productsPerPage = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://qcshp3-8080.csb.app/products');
        setProducts(response.data);
        setTotalPages(Math.ceil(response.data.length / productsPerPage));
      } catch (err) {
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Tính toán danh sách sản phẩm cho trang hiện tại
  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <Row>
        {paginatedProducts.map((product) => (
          <Col key={product.id} md={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.content}</Card.Text>
                <Button variant="primary">Price: {product.price} VND</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default ProductList;
