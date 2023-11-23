import React from 'react';
import { Col, Row , Form, Button} from 'react-bootstrap';
import contact from "../image/contact.png";
import Map from "../contact/Location";
import FormContainer from "./FormContainer";
import "./style.css";

const ContactScreen = () => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <img className="contact-img" src={contact} alt="contact-img" />
          <div className="contact-header">
            <h1>Liên hệ với chúng tôi</h1>
            <p>
              Những ý kiến đóng góp của các bạn sẽ giúp chúng tôi hoàn thiện hơn
              trong tương lai. Cảm ơn!
            </p>
          </div>
        </Col>
      </Row>

      <Row>
      <Col md={6}>
          <FormContainer>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>
                  <i className="fas fa-user"></i> Tên:{" "}
                </Form.Label>
                <Form.Control type="email" placeholder="   Nhập tên..." />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>
                  <i className="fas fa-envelope-square"></i> Email: 
                </Form.Label>
                <Form.Control type="email" placeholder="   Nhập email..." />
              </Form.Group>
              <Form.Group controlId="text">
                <Form.Label>
                  <i className="fas fa-pen"></i> Lời nhắn: 
                </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button
                type="submit"
                variant="success"
                className="signin-btn"
                block
              >
                Gửi
              </Button>
            </Form>
          </FormContainer>
        </Col>
      </Row>

      <Col className="contact-end-map">
        <h6>Địa chỉ</h6>
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBmO7cdf4KZcrBq2Vw7KItgy25YWj2V1Tw&callback=initMap`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: `90vh`,
                margin: `auto`,
                border: "2px solid black",
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Col>
      <Row>
        <Col className="contact-end">
          <h6>Số điện thoại</h6>
          <p>+########</p>
        </Col>
        <Col className="contact-end">
          {" "}
          <h6>Email</h6>
          <p>#######</p>
        </Col>
      </Row>
    </div>
  );
};

export default ContactScreen;
