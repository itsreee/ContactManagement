import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, email });
    setName('');
    setEmail('');
  };


  return (
    <Container className="mt-5" style={{maxWidth:"800px"}} >
        <h1 className='text-center mt-3'>Contacts</h1>
    <Row className="justify-content-center mt-5">
      <Col xs={12} md={6}>
        <Form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
          <Form.Group className="mb-3">
            <Form.Floating>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Name</label>
            </Form.Floating>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Floating>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </Form.Floating>
          </Form.Group>
          <div className='text-center'>
            <Button type="submit" className='bg-success'>Add Contact</Button>
          </div>
        </Form>
      </Col>
    </Row>
  </Container>
  );
};

export default ContactForm;
