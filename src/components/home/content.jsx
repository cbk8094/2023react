import {Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas} from 'react-bootstrap';
import { AiFillFire } from "react-icons/ai";

function Content(){
  return (
    <Container className='mb-3'>
      <h3>Buy Slave</h3>
      <Row>
        <Col sx={12} md={6} className='order-2 order-md-1 d-flex align-items-end justify-content-center justify-content-md-start'>
         <div className="d-flex flex-column align-items-center align-items-md-start">
          <div className="icon mb-3">
            <AiFillFire style={{color:"white", fontSize:"2em"}} />
         </div>
         
          <div className='text-center text-md-start'>
              <h4>장기매입</h4>
              <p>심장 간 콩팥 안구</p>
          </div>
         </div>
        </Col>
        <Col sx={12} md={6} className='banner order-1 order-md-2 bg-dark img-circle rounded'>
          {/* <img src="./img/123123.png" className=' overflow-hidden'/> */}
        </Col>
      </Row>
    </Container>
  )
}

export default Content;