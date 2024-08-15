import React from 'react';
import ProductList from './components/ProductList';
import { Container, Navbar, Nav } from 'react-bootstrap';

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Product Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="my-4">
        <h1 className="mb-4">Products</h1>
        <ProductList />
      </Container>
    </div>
  );
};

export default App;
