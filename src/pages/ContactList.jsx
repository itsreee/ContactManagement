import React from 'react';
import { Button, Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <Container className="mt-5" style={{maxWidth:"600px"}}>
      <Table responsive  striped bordered hover className="mx-auto text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td className="text-wrap" style={{ maxWidth: '200px' }}> 
                {contact.email}
              </td>
              <td>
                <Link to={`/edit/${contact.id}`}>
                  <Button variant="warning"><i className="fa-solid fa-edit"></i></Button>
                </Link>
              </td>
              <td>
                <Button variant="danger" className="ms-2" onClick={() => deleteContact(contact.id)}>
                    <i className="fa-solid fa-trash text-light"></i>

                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ContactList;
