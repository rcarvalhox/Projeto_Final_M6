import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import art from '../assets/img/logo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="container-footer">
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="space-art w-1" src={art} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. Todos os direitos</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
