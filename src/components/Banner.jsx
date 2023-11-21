import {Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas} from 'react-bootstrap';

function Banner (){
  
  return(
    <div className='banWrap'>
      <Container className='py-5'>
        <Row>
          <Col md={{span:6, offset:3}} className='d-flex justify-content-center text-white shadow'>
          human organs expert
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner;