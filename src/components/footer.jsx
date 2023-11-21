import {Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas} from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer(){
  return(
    <div style={{background:"#ddd"}} className='py-5'>
      <Container>
        <Row className='mb-5'>
          <Col md={6}>
            <ul className='d-flex justify-content-md-start justify-content-center'>
              <li className='no-underline'><a className='no-underline' href="#!">Privacy</a></li>
              <li className='px-3'>/</li>
              <li className='no-underline'><a className='no-underline' href="#!">Team</a></li>
              <li className='px-3'>/</li>
              <li className='no-underline'><a className='no-underline' href="#!">Sitemap</a></li>
            </ul>
          </Col>  
          <Col md={6}>
            <ul className='d-flex gap-3 justify-content-md-end justify-content-center'>
              <li><FaGithub/></li>
              <li><FaFacebook/></li>
            </ul>
          </Col>  
        </Row>
        <Row>
          <Col className='text-center text-md-start px-3'>
            <p className='small'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum debitis numquam fugiat soluta ad odit quod id, aut consectetur architecto! ad odit quod id, aut consectetur architecto!</p>
            <p className='small'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis laboriosam reiciendis asperiores veritatis suscipit ipsam! </p>
          </Col>  
        </Row>  
      </Container>
    </div>
  )
}

export default Footer;