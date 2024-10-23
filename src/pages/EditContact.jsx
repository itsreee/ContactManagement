import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const contact = contacts.find(contact => contact.id === parseInt(id));
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
    }
  }, [id, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(id, { name, email });
    navigate('/');
  };

  return (
    <>
     <div className="container mt-5" style={{width:"500px",paddingTop:"100px",paddingBottom:"100px"}}>
      <h2 className='text-center'>Edit Contact</h2>
      <Form onSubmit={handleSubmit} className='border p-4 rounded bg-light mt-5'>
        <Form.Group className="mb-3 ">
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
        <div className="d-flex justify-content-center">
        <Button type="submit" className='bg-success'>Update Contact</Button>
        </div>
      </Form>
    </div>
    </>
   
  );
};

export default EditContact;
