import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <About />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Services />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Portfolio />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Contact />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;