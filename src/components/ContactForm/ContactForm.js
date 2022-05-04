import {useForm}from "../../hooks/useForm";
import { useEffect, useState } from "react";
import axiosClient from "../../config/axiosClient";
import {Form, Button, Row, Col} from "react-bootstrap";
import {MdOutlineContactSupport} from "react-icons/md";
import './ContactForm.css';

const ContactForm = () =>{
  const [setUsers] = useState([]);
  

  const getUsers = async () => {
    try {
      const response = await axiosClient.get("/users/");
      setUsers(response.data.users);
      console.log(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="background-contact">
      <div className="contact_content">
        <div >
          <Form>
          <MdOutlineContactSupport className="login-icon text-reset py-2" />

            <Row>
              <Col>
                <Form.Control placeholder="Nombre" />
              </Col>
              <Col>
                <Form.Control placeholder="Apellido" />
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tu dirección de email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Escribe tu consulta por favor</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button
              variant="danger"
              className="login-button mt-2 mb-2 d-flex center"
              type="submit"
            >
              ENVIAR FORMULARIO
            </Button>
          </Form>
          ;
        </div>
      </div>
    </div>
  );
};
export default ContactForm;

